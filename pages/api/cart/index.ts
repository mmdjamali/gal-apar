import { CartModel } from "@/models/cart";
import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { CartProductType } from "@/types/cart";
import { ProductModel } from "@/models/product";

const cart = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req?.method) return;

  await connectDB();

  if (req.method === "GET") {
    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user?._id) return res.status(401).end();

    const cart = await CartModel.findOne({ owner: user._id }).populate([
      "products.product",
      "products.variant",
    ]);

    return res.json({
      cart,
    });
  }

  if (req.method === "POST") {
    const body = req.body;

    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user) return res.status(401).end();

    const cart = await CartModel.findOne({ owner: user._id });

    if (!cart) {
      const product = await ProductModel.findOne({ _id: body.product });

      const new_cart = await CartModel.create({
        owner: user._id,
        products: [
          {
            product: body?.product,
            quantity: body?.quantity,
          },
        ],
      });

      const cart = await CartModel.findOne({ _id: new_cart._id }).populate([
        "products.product",
      ]);

      return res.json({ cart });
    }

    const product_exists = cart?.products.some(
      (p: { product: string; variant: string; quantity: number }) =>
        p.product.toString() === body.product
    );

    if (product_exists) {
      const product = cart?.products.filter(
        (p: { product: string; variant: string; quantity: number }) =>
          p.product.toString() === body.product
      )[0];

      await CartModel.updateOne(
        {
          _id: cart._id,
          "products.product": body.product,
          "products.variant": body.variant || null,
        },
        {
          $set: {
            "products.$.quantity": product.quantity + body.quantity,
          },
        }
      );

      const new_cart = await CartModel.findOne({ _id: cart._id }).populate([
        "products.product",
      ]);

      return res.json({ cart: new_cart });
    } else {
      const products = [
        ...(cart?.products ?? []),
        {
          product: body.product,
          quantity: body.quantity,
        },
      ];

      await CartModel.updateOne({ _id: cart._id }, { products });

      const new_cart = await CartModel.findOne({ _id: cart._id }).populate([
        "products.product",
      ]);

      return res.json({ cart: new_cart });
    }
  }

  if (req.method === "DELETE") {
    const body = req.body;

    const user = (await getServerSession(req, res, nextAuthConfig))?.user;

    if (!user) return res.status(401).end();

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
      "products.variant",
    ]);

    return res.json({ cart: new_cart });
  }
};

export default cart;
