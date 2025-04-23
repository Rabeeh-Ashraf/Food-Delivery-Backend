import userModel from "../Models/Usermodel.js";

// Add items in user cart
const addToCart = async (req, res) => {
  try {
    const userData = await userModel.findOne({ _id: req.body.userId });

    //Check if user exists
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let cartData = await userData.cartData;

    //  Handle the itemId safely
    const itemId = req.body.itemId;
    if (!itemId) {
      return res
        .status(400)
        .json({ success: false, message: "Item ID is required" });
    }

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Server error in add to cart" });
  }
};
//remove item from users cart
const removeFromcart = async (req, res) => {
    try {
        let userData =await userModel.findById(req.body.userId)
        let cartData = await userData.cartData 
        const itemId = req.body.itemId
        if(cartData[itemId]>0){
            cartData[itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Removed from cart "})
    } catch (error) {
        console.log(error,"error in removing item in cart");
        res.json({success:false,message:"error in removing item in cart"})
        
    }
};
//fetch user cart data
const getCart = async (req, res) => {};

export { addToCart, removeFromcart, getCart };
