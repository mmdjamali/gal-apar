import NextAuth from "next-auth/next";
import { AuthOptions } from "../../../lib/auth-options";

export default NextAuth(AuthOptions)