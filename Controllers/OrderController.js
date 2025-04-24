import { CurrencyCodes } from "validator/lib/isISO4217.js";
import orderModel from "../Models/OrderModel.js";
import userModel from "../Models/Usermodel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user model from fronted
const placeOrder = async (req,res)=>{

    const frontend_url = "http://localhost:3000"

     try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items : req.body.items,
            amount : req.body.amount,
            address: req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data :{
                currency :"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity : item.quantity 
        }))

            line_items.push({
                price_data : {
                    currency :"inr",
                    product_data:{
                        name:"Delivery Charges"
                    },
                    unit_amount:2*100*80
                },
                quantity:1
            })

            
     } catch (error) {
        
     }
}
export {placeOrder}