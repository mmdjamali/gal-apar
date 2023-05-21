import { NextAuthOptions } from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from './db-client'

export const AuthOptions : NextAuthOptions = {
    adapter : MongoDBAdapter(clientPromise),
    session : {
        strategy : "jwt"
    },
    providers : [
        CredentialProvider({
            credentials : {
                code : { type : "text" , placeholder : "Enter your code...", label : "Code" },
                phone : { type : "text" , placeholder : "Enter your Phone...", label : "Phone" },
            },
            async authorize(credentials){
                if(!credentials || !credentials?.code || !credentials?.phone) return null

                const res = await fetch("http://localhost:3000/api/auth/validate-otp", { 
                    method : "POST",
                    headers : { "Content-Type" : "application/json"},
                    body : JSON.stringify({
                        phone : credentials.phone,
                        otp : credentials.code,
                    })
                })

                if(!res.ok){
                    return null
                }

                const {user} = await res.json()

                return user
            }
        })
    ],
    callbacks : {
        jwt({token,user}) {
            return {
                ...token,
                ...user
            }
        },
        session({session , token}){
            if(token){
                session.user = {...token}
            }
            return session
        }
    },
    debug : process.env.NODE_ENV === "development",
    secret : process.env.ACCESS_TOKEN_SECRET
}