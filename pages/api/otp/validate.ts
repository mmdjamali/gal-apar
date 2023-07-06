import { NextApiRequest, NextApiResponse } from "next";

import { connectDB } from "@/lib/connect-db";

import { AccountModel } from "@/models/account";
import { UserModel } from "@/models/user";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const body = req.body;

      if (!body.email)
        return res.status(401).send({ message: "email is required" });

      await connectDB();

      const account = await AccountModel.findOne({ email: body.email });
      const otp = account?.otp;

      if (!body.otp)
        return res.status(401).send({ message: "otp is required" });

      if (!otp)
        return res
          .status(401)
          .send({ message: "there is no otp for this account" });

      if (otp.expires_at < Date.now())
        return res.status(401).send({ message: "otp has been expired" });

      if (otp.value !== body.otp)
        return res.status(401).send({ message: "otp is not correct" });

      if (account.user_id) {
        const user = await UserModel.findById(account.user_id);

        return res.status(200).json({
          user,
        });
      }

      const user = await UserModel.create({
        email: body.email,
      });

      await AccountModel.findByIdAndUpdate(account._id, {
        user_id: user._id,
      });

      return res.status(200).json({
        user,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "sorry something went wrong in the server please try again",
    });
  }
}
