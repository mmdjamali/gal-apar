import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { ProductModel } from "@/models/product";
import { UserModel } from "@/models/user";
import { type VariantType } from "@/types/product";
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

    if (!user.is_seller) {
      res.statusMessage = "user isn't a verified seller";
      return res.status(401);
    }

    const product = ProductModel.create({
      seller_id: user._id,
      images: body.images,
      name: body.name,
      description: body.description,
      category: body.category,
      base_price: (body.variants as VariantType[]).sort(
        (a, b) =>
          parseFloat(b.price?.toString() ?? "") -
          parseFloat(a.price?.toString() ?? "")
      )[0].price,
    });

    return res.json({ message: "product added successfuly" });
  }

  if (req.method === "GET") {
    const products = await ProductModel.find().limit(10);

    return res.json(products);
  }

  return;
};

export default product;
