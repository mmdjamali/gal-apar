import mongoose from "mongoose";

export const dbConnect = () => {
    return mongoose.connect(process.env.MONGODB_URI ?? "")
}