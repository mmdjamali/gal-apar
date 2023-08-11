import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { ProductModel } from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === "GET") {
    const { _id } = req.query;

    const product = await ProductModel.findOne({ _id }).populate([
      "variants",
      "seller_id",
    ]);

    if (!product) return res.status(404);

    return res.json(product);
  }

  if (req.method === "DELETE") {
    const { _id } = req.query;

    if (!_id) return res.status(402);

    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user) return res.status(401);

    if (!user?.is_seller) return res.status(401).end();

    const product = await ProductModel.findById(_id);
    if (!product) return res.status(404);

    if (product.seller_id.toString() !== user._id.toString())
      return res.status(401);

    const remove = await ProductModel.findOneAndRemove({
      _id,
    });

    console.log(remove);

    return res.status(200);
  }
};

export default handler;
