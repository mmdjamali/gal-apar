import mongoose, { model, Schema } from "mongoose";

const variantSchema = new Schema({
  product_id: Schema.Types.ObjectId,
  color: String,
  price: Number,
  size: String,
  quantity: Number,
});

export const variantModel =
  mongoose.models.variant || mongoose.model("variant", variantSchema);
