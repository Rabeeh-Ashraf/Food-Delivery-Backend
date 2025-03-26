import express from "express"
import cors from "cors"
import { ConnectDb } from "./Config/Db.js"
import foodRouter from "./Routes/Foodroute.js"



// App Comfig
const app = express()
const Port = 4000
 //Middleware
 app.use(express.json())
 app.use(cors())

 //db-Connection
ConnectDb()

//API End Point
app.use("/api/food",foodRouter)
app.use("/images",express.static('Uploads'))

 app.get("/",(req,res)=>{
        res.send("API Working")
})


app.listen(Port,()=>{
    console.log(`server is working on http://localhost:${Port}`);
    
})



//mongodb+srv://Rabeeh-Ashraf:12345@cluster0.fgaxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0.
