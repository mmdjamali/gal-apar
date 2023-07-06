import NextAuth from "next-auth/next";
import { nextAuthConfig } from "../../../lib/next-auth-config";

export default NextAuth(nextAuthConfig);
