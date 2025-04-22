import express from "express"
import { addToCart,removeFromcart,getCart } from "../Controllers/Cartcontroller.js"


const Cartrouter = express.Router();

Cartrouter.post("/add",addToCart);
Cartrouter.post("/remove",removeFromcart);
Cartrouter.post("/get",getCart);

export default Cartrouter 


