import { connectDB } from "@/lib/connect-db";
import { ProductModel } from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";

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
};

export default handler;
