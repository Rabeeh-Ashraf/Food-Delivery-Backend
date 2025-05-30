import express from "express"
import { Addfood, listFood, removeFooditems } from "../Controllers/FoodController.js"
import multer from "multer"

const foodRouter = express.Router()

//image storage engine
const storage=multer.diskStorage({
    destination:"Uploads",
    filename :(req,file,cb)=>{
            return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage : storage})

foodRouter.post("/add",upload.single("image"),Addfood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFooditems)

export default foodRouter;    