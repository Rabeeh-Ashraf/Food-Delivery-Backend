import userModel from "../Models/Usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//Login user
const loginUser = async (req, res) => {
  const {email,password} =req.body
  try {
    const user = await userModel.findOne({email})
    if(!user){
      return res.json({success:false,message:"User does not exist"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
     return res.json({success:false,message:"Invalid credentials"})
    }
  } catch (error) {
    res.json({success:false,message:"error"})
  }
};

//Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //check if all fields are provided
    const exists = await userModel.findOne({ email });
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }
    //check if user already exist
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    //validating email & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create an new user to database
    const newuser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newuser.save();
    //generate jwd token
    const createtoken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET);
    };
    //send signup succcess
    const token = createtoken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export { loginUser, registerUser };