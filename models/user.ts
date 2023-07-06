import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  name: String,
  image: String,
});

export const UserModel =
  mongoose.models.user<typeof UserSchema> || model("user", UserSchema);
