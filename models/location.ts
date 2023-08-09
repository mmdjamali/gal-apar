import mongoose, { Schema, SchemaTypes, model } from "mongoose";
import { UserModel } from "./user";

const LoctionSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: UserModel },
  lot: { type: Number, require: true },
  lon: { type: Number, require: true },
  address: { type: String, require: true },
  receiver_name: { type: String, require: true },
  receiver_last_name: { type: String, require: true },
  receiver_phone_number: { type: String, require: true },
});

export const LocationModel =
  mongoose.models.location || model("location", LoctionSchema);
