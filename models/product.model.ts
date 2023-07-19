import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  seller_id: Schema.Types.ObjectId,
  name: String,
  description: String,
  category: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  images: {
    type: [String],
    require: true,
    default: [],
  },
  discount: {
    type: Object,
    default: null,
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
    type: {
      currency: String,
      value: Number,
    },
    require: true,
  },
});

export const ProductModel =
  mongoose.models.product<typeof ProductSchema> ||
  mongoose.model("product", ProductSchema);
