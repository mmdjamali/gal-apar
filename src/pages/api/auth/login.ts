import { dbConnect } from "@/lib/db-connect";
import { AccountModel } from "@/models/account.model";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Login(req : NextApiRequest, res : NextApiResponse){
    try{
        if(req.method === "POST"){
            const body = req.body

            if(!body.phone) return res.status(401).send({message : "phone number is required"})

            await dbConnect()

            const account = await AccountModel.findOne({ phone : body.phone })

            const code = {
                digits : (Date.now() * (Math.random() * 1000)).toString().slice(0,6),
                expires_at : Date.now() + (10 * 60 * 1000)
            }

            if(account){
                await AccountModel.findByIdAndUpdate(account._id , {
                    code
                })

                res.status(200).send({message : "successful"})
            } else {
                await AccountModel.create({
                    phone : body.phone,
                    code
                })

                res.status(200).send({message : "successful"})
            }
        }
    }
    catch(err){
        res.status(500).send({message : "sorry something went wrong in the server please try again"})
    }
} 