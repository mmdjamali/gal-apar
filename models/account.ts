import mongoose, { Schema, SchemaTypes, model } from "mongoose";

const OTP = new Schema({
  value: String,
  expires_at: Number,
});

const AccountSchema = new Schema({
  email: String,
  user_id: SchemaTypes.ObjectId,
  otp: {
    type: OTP,
    default: null,
  },
});

export const AccountModel =
  mongoose.models.account<typeof AccountSchema> ||
  model("account", AccountSchema);
