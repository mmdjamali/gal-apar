import mongoose, { Schema, model } from "mongoose";

const CartSchema = new Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  products: [
    {
      product: { type: mongoose.Types.ObjectId, ref: "product" },
      variant: { type: mongoose.Types.ObjectId, ref: "variant" },
      quantity: { type: Number, require: true },
    },
  ],
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export const CartModel = mongoose.models.cart || model("cart", CartSchema);
