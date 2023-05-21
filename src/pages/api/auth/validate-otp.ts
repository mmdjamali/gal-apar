import { dbConnect } from "@/lib/db-connect";
import { AccountModel } from "@/models/account.model";
import { UserModel } from "@/models/user.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function ValidateOtp(req : NextApiRequest, res : NextApiResponse) {
    try{
        if(req.method === "POST"){
            const body = req.body

            if(!body.otp && !body.phone) return res.status(401).send({message : "invalid credentials"})

            await dbConnect()

            const account = await AccountModel.findOne({phone : body.phone})

            if(!account) return res.status(404).send({message :  "no such user exists"})

            if(account.code.expires_at < Date.now()) return res.status(401).send({message : "code has been expired"})

            if(account.code.digits !== body.otp) return res.status(401).send({message : "wrong otp"})

            let user;

            const update : {
                code : null,
                profile ?: string
            } = {
                code : null
            }

            if(!account.profile) {
                user = await UserModel.create({
                    phone : body.phone,
                    name : "Unknown",
                    picture : ""
                })

                update.profile = user._id
            } else {
                user = await UserModel.findOne({
                    _id : account.profile
                }) 
            }

            await AccountModel.findByIdAndUpdate(account._id, update)

            res.status(200).json({
                user
            })
        }
    }
    catch(err){
        console.error(err)
        res.status(500).send({message : "sorry something went wrong in the server"})
    }
}