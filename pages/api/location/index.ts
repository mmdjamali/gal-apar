import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { LocationModel } from "@/models/location";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import z from "zod";

const z_location = z.object({
  address: z.string(),
  lat: z.number(),
  lot: z.number(),
  receiver_name: z.string(),
  receiver_last_name: z.string(),
  receiver_phone_number: z.string(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB();

    if (req.method === "POST") {
      const {
        address,
        lat,
        lot,
        receiver_last_name,
        receiver_name,
        receiver_phone_number,
      } = z_location.parse(req.body);

      const user = (await getServerSession(req, res, nextAuthConfig))?.user;

      if (!user) return res.status(401).json("Auth required!");

      await LocationModel.create({
        user: user._id,
        address,
        lat,
        lot,
        receiver_name,
        receiver_last_name,
        receiver_phone_number,
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
