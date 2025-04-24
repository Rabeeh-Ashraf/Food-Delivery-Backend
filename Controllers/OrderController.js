import orderModel from "../Models/OrderModel.js";
import userModel from "../Models/Usermodel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user model from fronted
const placeOrder = async (req,res)=>{
     
}
export {placeOrder}