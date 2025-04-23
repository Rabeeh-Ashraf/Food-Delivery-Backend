import express from "express"
import { addToCart,removeFromcart,getCart } from "../Controllers/Cartcontroller.js"
import AuthMiddleware from "../Middleware/Auth.js";


const Cartrouter = express.Router();

Cartrouter.post("/add",AuthMiddleware,addToCart);
Cartrouter.post("/remove",AuthMiddleware,removeFromcart,);
Cartrouter.post("/get",AuthMiddleware,getCart);

export default Cartrouter 


