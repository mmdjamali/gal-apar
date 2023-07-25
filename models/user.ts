import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  name: String,
  image: String,
  is_seller: {
    type: Boolean,
    default: false,
  },
});

export const UserModel = mongoose.models.user || model("user", UserSchema);
