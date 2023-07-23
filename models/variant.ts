import mongoose, { model, Schema } from "mongoose";

const variantSchema = new Schema({
  product_id: Schema.Types.ObjectId,
  color: String,
  price: Number,
  quantity: Number,
});

export const variantModel =
  mongoose.models.variant<typeof variantSchema> ||
  model("variant", variantSchema);
