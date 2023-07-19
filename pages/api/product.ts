import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { ProductModel } from "@/models/product.model";
import { UserModel } from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const product = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req?.method) return;

  await connectDB();

  if (req.method === "POST") {
    const body = req?.body;

    const session = await getServerSession(req, res, nextAuthConfig);

    if (!session?.user._id) {
      res.statusMessage = "auth required";
      return res.status(401);
    }

    const user = await UserModel.findById(session.user._id);

    if (!user) {
      res.statusMessage = "no such user exists";
      return res.status(401);
    }

    const product = await ProductModel.create({
      seller_id: user._id,
      images: body.images,
      name: body.name,
      description: body.description,
      quantity: body.quantity,
      price: body.price,
      category: body.category,
    });

    return res.json({ message: "product added successfuly" });
  }

  return;
};

export default product;
