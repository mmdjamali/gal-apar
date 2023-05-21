import { NextAuthOptions } from 'next-auth'
import CredentialProvider from "next-auth/providers/credentials"

export const AuthOptions : NextAuthOptions = {
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