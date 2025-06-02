import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req){
  try {
     const {userName, email, password} = await req.json();
      
     const hashedPassword = await bcrypt.hash(password,10)
     await connectMongoDB();
     await User.create({userName,email,password:hashedPassword})
     
     return NextResponse.json({message:"user registered"},{status:201})
  } catch (error) {
    
    return NextResponse.json(
        {
            message:"an error occurred the register of user"
        },
        {status:500}
    )
  }
}