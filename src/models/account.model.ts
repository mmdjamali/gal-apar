import mongoose from "mongoose"

const Schema = mongoose.Schema

const CodeSchema = new Schema({
    digits : String,
    expires_at : Number
})

const AccountSchema = new Schema({
    profile :{ 
        type : Schema.Types.ObjectId,
        default : null
    },
    phone : String,
    code : {
        type : CodeSchema,
        default : null
    }
})

export const AccountModel = mongoose.models.account<typeof AccountSchema> || mongoose.model("account",AccountSchema)