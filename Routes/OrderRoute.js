import express from "express"
import AuthMiddleware from "../Middleware/Auth.js"
import { placeOrder, verifyOrder ,userOrders} from "../Controllers/OrderController.js"

const OrderRouter = express.Router()
OrderRouter.post("/place",AuthMiddleware,placeOrder)
OrderRouter.post("/verify",verifyOrder)
OrderRouter.post("/userOrders",AuthMiddleware,userOrders)


export default OrderRouter 
