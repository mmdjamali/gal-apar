import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import clientPromise from "./mongo-client";

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
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
};
