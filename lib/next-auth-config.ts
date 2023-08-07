import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import clientPromise from "./mongo-client";
import { UserModel } from "@/models/user";
import { connectDB } from "./connect-db";
import { AccountModel } from "@/models/account";

export const nextAuthConfig: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (!credentials || !credentials?.email || !credentials?.otp)
          return null;

        const { email, otp } = credentials;

        await connectDB();

        const account = await AccountModel.findOne({ email });

        if (!otp) return null;

        if (!account.otp) return null;

        if (account.otp.expires_at < Date.now()) return null;

        if (account.otp.value !== otp) return null;

        if (account.user_id) {
          const user = await UserModel.findById(account.user_id);

          return user;
        }

        const user = await UserModel.create({
          email,
        });

        await AccountModel.findByIdAndUpdate(account._id, {
          user_id: user._id,
        });

        return user;
      },
      credentials: {
        email: { label: "Email", placeholder: "Email", type: "text" },
        otp: { label: "Code", placeholder: "Code", type: "text" },
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      await connectDB();

      const profile = await UserModel.findOne({ email: token.email });

      if (!profile) return token;

      return {
        _id: profile._id,
        email: profile.email,
        name: profile.name,
        image: profile.image,
        is_seller: !!profile.is_seller,
      };
    },
    session({ token, session }) {
      if (session) {
        session.user._id = token._id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.is_seller = token.is_seller;
        session.user.image = token.image;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
