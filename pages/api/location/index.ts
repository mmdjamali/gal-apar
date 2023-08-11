import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { LocationModel } from "@/models/location";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === "POST") {
    const body = req?.body;

    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user) return res.status(401).json("Auth required!");

    await LocationModel.create({
      user: user._id,
      address: body.address,
      lat: body.lat,
      lot: body.lot,
      receiver_name: body.receiver_name,
      receiver_last_name: body.receiver_last_name,
      receiver_phone_number: body.receiver_phone_number,
    });

    const locations = await LocationModel.find({ user: user._id });

    return res.json(locations);
  }

  if (req.method === "GET") {
    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user) return res.status(401).json("Auth required!");

    const locations = await LocationModel.find({ user: user._id });

    return res.json(locations);
  }

  return res.status(404).end();
};

export default handler;
