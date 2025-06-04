import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from '@/lib/mongodb';
import User from "@/models/user";
import bcrypt from "bcryptjs";


const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
             credentials:{
                      email: { label: "Email", type: "text" },
                      password: { label: "Password", type: "password" },
             },


             async authorize(credentials){
              const {email, password} = credentials;
                
              try {
                await connectMongoDB()
                const user = await User.findOne({email});

                if(!user){
                    return null; // User not found
                }

                const passwordMatch = await bcrypt.compare(password, user.password);

                if(!passwordMatch){
                    return null; // Invalid password
                }
                return user; // Return user object if credentials are valid
              } catch (error) {
                console.error("Error during authorization:", error);
                throw new Error("Authorization failed. Please try again later.");
                
              }
             },
        }),
    ],
    session :{
      strategy : "jwt",
    },
    secret : process.env.NETAUTH_SECRET,
    pages :{
        signIn: "/",
    }
}

const handler  = NextAuth(authOptions);
export {handler as GET , handler as POST};