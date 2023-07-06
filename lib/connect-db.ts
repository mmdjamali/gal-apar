import mongoose from "mongoose";

export const connectDB = async () => {
  if (!mongoose.connections[0].readyState)
    await mongoose.connect(process.env.MONGODB_URI ?? "");
};
