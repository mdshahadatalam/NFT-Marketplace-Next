import { NextResponse } from "next/server";

export async function POST(req){
  try {
     const {userName, email, password} = await req.json();

     console.log("Name:",userName);
      console.log("email:",email);
       console.log("password:",password);
     

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