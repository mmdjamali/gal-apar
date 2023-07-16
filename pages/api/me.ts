import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { connectDB } from "@/lib/connect-db";
import { UserModel } from "@/models/user";

const me = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    await connectDB();

    const session = await getServerSession(req, res, nextAuthConfig);

    if (!session?.user?._id)
      return res.status(401).json({
        message: "you must be authenticated",
      });

    const user = await UserModel.findById(session?.user?._id);

    if (!user)
      return res.status(401).json({
        message: "no such user exists",
      });

    return res.json(user);
  }
};

export default me;
