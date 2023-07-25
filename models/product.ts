import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  seller_id: { type: Schema.Types.ObjectId, ref: "user" },
  name: String,
  description: String,
  category: {
    type: String,
    require: true,
  },
  currency: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    default: null,
  },
  images: {
    type: [String],
    require: true,
    default: [],
  },
  available: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  price: {
    type: Number,
    default: null,
  },
  base_price: {
    type: Number,
    require: true,
  },
  variants: [
    {
      type: Schema.Types.ObjectId,
      ref: "variant",
    },
  ],
});

export const ProductModel =
  mongoose.models.product || mongoose.model("product", ProductSchema);
