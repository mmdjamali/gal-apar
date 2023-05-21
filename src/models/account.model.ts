import mongoose from "mongoose"

const Schema = mongoose.Schema

const CodeSchema = new Schema({
    code : String,
    expires_at : Number
})

const AccountSchema = new Schema({
    profile : Schema.Types.ObjectId,
    phone : String,
    code : {
        type : CodeSchema,
        default : null
    }
})

export const AccountModel = mongoose.models.account<typeof AccountSchema> || mongoose.model("account",AccountSchema)