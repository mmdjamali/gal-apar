import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  seller: Schema.Types.ObjectId,
  name: String,
  information: [String],
  description: String,
  category: {
    type: String,
    require: true,
  },
  images: {
    type: [String],
    require: true,
  },
  variants: {
    type: [Object],
    require: true,
  },
  discount: {
    type: Object,
    default: null,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

export const ProductModel =
  mongoose.models.product<typeof ProductSchema> ||
  mongoose.model("product", ProductSchema);
