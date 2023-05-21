import mongoose from "mongoose"

const Schema = mongoose.Schema

const UserSchema = new Schema({
    phone : String,
    name : String,
    picture : String
})

export const UserModel = mongoose.models.user<typeof UserSchema> || mongoose.model("user",UserSchema)