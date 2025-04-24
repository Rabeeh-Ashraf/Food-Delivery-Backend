import express from "express"
import AuthMiddleware from "../Middleware/Auth"
import { placeOrder } from "../Controllers/OrderController.js"

const OrderRouter = express.Router()
OrderRouter.post("/place",AuthMiddleware,placeOrder)


export default OrderRouter
