import { JWT } from "next-auth/jwt";
import { User } from "next-auth";

type UserID = string;

declare module "next-auth/jwt" {
  interface JWT {
    _id: UserID;
    is_seller: boolean;
    image: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      _id: UserID;
      is_seller: boolean;
      image: string;
    };
  }
  interface User {
    _id: UserID;
  }
}
