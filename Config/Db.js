import mongoose from "mongoose";
export const ConnectDb = async ()=>{
await mongoose.connect('mongodb+srv://Rabeeh-Ashraf:12345@cluster0.fgaxd.mongodb.net/Food Delivery').then(()=>{
    console.log("Database Connected");
    
})
}