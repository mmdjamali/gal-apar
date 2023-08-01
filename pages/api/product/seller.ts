import { connectDB } from "@/lib/connect-db";
import { nextAuthConfig } from "@/lib/next-auth-config";
import { ProductModel } from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const seller = async (req : NextApiRequest, res : NextApiResponse) => {
    await connectDB()

    if(req.method === "GET") {
        const user = (await getServerSession(req,res,nextAuthConfig))?.user

        if (!user?._id) {
            res.statusMessage = "auth required";
            return res.status(401);
          }

        const products = await ProductModel.find({
            seller_id : user._id
        })

        return res.json({
            products
        })
    }
}

export default seller