import foodModel from "../Models/FoodModels.js";
import fs from 'fs'


//add food item
const Addfood = async(req,res)=>{

    let image_filename =`${req.file.filename}`;
    const food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price: req.body.price,
        image : image_filename,
        category : req.body.category 
    })
try{
    await food.save();
    res.json({success :true,message :"Food Added"})
}catch(error){
     console.log(error)
     res.json({success:false,message:error})
}

}
// viewing All food list
const listFood =async(req,res)=>{
   try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
   }catch(error){
    console.log(error);
    res.json({success:false,message:"error"}) 
    
   }  
}
//remove food items
const removeFooditems =async (req,res)=>{
    try{
        const   food=await foodModel.findById(req.body.id)
        //for removing the image
        fs.unlink(`Uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
        
    }
}

export  {Addfood,listFood,removeFooditems} 