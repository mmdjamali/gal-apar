import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import clientPromise from "./mongo-client";
import { UserModel } from "@/models/user";
import { connectDB } from "./connect-db";

export const nextAuthConfig: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (!credentials || !credentials?.email || !credentials?.otp)
          return null;

        const { email, otp } = credentials;

        const res = await fetch("http://localhost:3000/api/otp/validate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            otp,
          }),
        });

        if (!res.ok) return null;

        const data = await res.json();

        return data.user;
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
