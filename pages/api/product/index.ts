import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { ProductModel } from "@/models/product";
import { UserModel } from "@/models/user";
import { variantModel } from "@/models/variant";
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

    if (!body.variants || body.variants.length === 0) {
      const product = await ProductModel.create({
        seller_id: user._id,
        images: body.images,
        name: body.name,
        description: body.description,
        currency: body.currency,
        base_price: body.price,
        category: body.category,
        price: body.price,
        quantity: body.quantity,
      });

      return res.json({ message: "product added successfuly" });
    }

    const product = new ProductModel({
      seller_id: user._id,
      images: body.images,
      name: body.name,
      description: body.description,
      currency: body.currency,
      category: body.category,
      base_price: (body.variants as VariantType[]).sort(
        (a, b) => parseFloat(b.price?.toString() ?? "") - parseFloat(a.price?.toString() ?? "")
      )[0].price,
    });

    const variants = await variantModel.insertMany(
      (body.variants as VariantType[]).map(({ _id, ...variant }) => ({
        product_id: product._id,
        ...variant,
      }))
    );

    product.variants = variants.map(({ _id }) => _id);

    await product.save();

    return res.json({ message: "product added successfuly" });
  }

  if (req.method === "GET") {
    const products = await ProductModel.find().limit(10).populate("variants");

    return res.json(products);
  }

  return;
};

export default product;
