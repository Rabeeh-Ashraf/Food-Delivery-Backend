import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export const ConnectDb = async ()=>{
await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected");
    
})
}