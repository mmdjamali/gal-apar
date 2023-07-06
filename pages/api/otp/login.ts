import { connectDB } from "@/lib/connect-db";
import { AccountModel } from "@/models/account";
import { NextApiRequest, NextApiResponse } from "next";

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

      const otp = {
        value:
          process.env.NODE_ENV === "development"
            ? "444444"
            : Math.round(Date.now() * (Math.random() * 1000))
                .toString()
                .slice(0, 6),
        expires_at: Date.now() + 10 * 60 * 1000,
      };

      if (account) {
        await AccountModel.findByIdAndUpdate(account._id, {
          otp,
        });

        res.status(200).send({ message: "successful" });
      } else {
        await AccountModel.create({
          email: body.email,
          otp,
        });

        res.status(200).send({ message: "successful" });
      }
    }
  } catch (err) {
    res.status(500).send({
      message: "sorry something went wrong in the server please try again",
    });
  }
}
