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
                code : { type : "text" , placeholder : "Enter your code...", label : "Code" }
            },
            async authorize(credentials){
                return null
            }
        })
    ]
}