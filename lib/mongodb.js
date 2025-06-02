import mongoose from "mongoose";


export const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect to mongoDB successful");
        
    } catch (error) {
        console.log("Error Connected to mongoDB",error);
        
    }
}