import express from "express"
import { addToCart,removeFromcart,getCart } from "../Controllers/Cartcontroller.js"
import AuthMiddleware from "../Middleware/Auth.js";


const Cartrouter = express.Router();

Cartrouter.post("/add",addToCart,AuthMiddleware);
Cartrouter.post("/remove",removeFromcart,AuthMiddleware);
Cartrouter.post("/get",getCart,AuthMiddleware);

export default Cartrouter 


