import jwt from "jsonwebtoken"


const AuthMiddleware = async (req,res,next)=>{
    const{token } = req.headers
     if(!token){
        return res.json({success:false,message:"Not authorized login Again"})
     }
     try {
        const token_Decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_Decode.id;
        
        next()
     } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
     }

    
}
export default AuthMiddleware;