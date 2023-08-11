import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { LocationModel } from "@/models/location";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === "DELETE") {
    const { _id } = req?.query;

    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user) return res.status(401).json("Auth required!");

    await LocationModel.findOneAndRemove({ user: user._id, _id });

    const locations = await LocationModel.find({ user: user._id });

    return res.json(locations);
  }

  return res.status(404).end();
};

export default handler;
