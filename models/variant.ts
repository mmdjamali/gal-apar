import mongoose, { model, Schema, Types } from "mongoose";

const varinatSchema = new Schema({
  product_id: Types.ObjectId,
  color: String,
  price: Number,
  quantity: Number,
});

export const variantModel =
  mongoose.models.variant<typeof varinatSchema> ||
  model("variant", varinatSchema);
