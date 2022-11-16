import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default (req,res,next)=>{
    const token = req.headers['authorization'].split(" ")[1];
    if(token){
        try {
            const validToken = jwt.verify(token,process.env.JWT_SECRET_KEY)
            if(validToken) next();
            else res.status(403).json({success:false,message:"Invalid Token"})
        } catch (error) {
            res.json(error)
        }
    }else{
        res.json({success:false,message:"Token is not found"})
    }
}