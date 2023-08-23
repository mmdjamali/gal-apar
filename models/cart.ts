import mongoose, { Schema, model } from "mongoose";
import { ProductModel } from "./product";
import { variantModel } from "./variant";
import { UserModel } from "./user";

const CartSchema = new Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: UserModel,
  },
  products: [
    {
      product: { type: mongoose.Types.ObjectId, ref: ProductModel },
      variant: { type: mongoose.Types.ObjectId, ref: variantModel },
      quantity: { type: Number, require: true },
    },
  ],
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export const CartModel = mongoose.models.cart || model("cart", CartSchema);
