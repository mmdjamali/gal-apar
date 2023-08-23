import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { CartModel } from "@/models/cart";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const handleRemove = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === "PATCH") {
    const body = req.body;

    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user) return (res.status(401).statusMessage = "auth required");

    const cart = await CartModel.findOne({ owner: user._id });

    await CartModel.updateOne(
      { _id: cart._id },
      {
        $pull: {
          products: {
            _id: body?._id,
          },
        },
      }
    );

    const new_cart = await CartModel.findOne({ _id: cart._id }).populate([
      "products.product",
    ]);

    return res.json({ cart: new_cart });
  }
};

export default handleRemove;
