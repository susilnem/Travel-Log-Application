import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'


export default class UserController{


    //create user
    async addUser(req,res,next){
        const secPass = await bcrypt.hash(req.body.password,10)
        try{ 
            const data=await User.create({
                username: req.body.username,
                password: secPass,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                address:req.body.address
             });
            if(data){
                res.json(data);
                // console.log(data)
            }else{
                res.json({success: false, message: "could not create user"})
            }
        }catch(err){
            res.json(err);
        }
    }

    //get all user details
    async getAllUsers(req,res,next){
        try{
            const users = await User.find();
            if(users){
                res.json(users)
            }else{
                res.json({success: false, message: "No data found"})
            }

        }catch(err){
            res.json(err);
        }
    }

    //get single user details
    async getSingleUser(req,res,next){
        const {id}=req.params;
        try{
            const user = await User.findById(id)
            if(user){
                res.json(user)
            }else{
                res.json({success:false,message:"No data found"})
            }
        }catch(err){
            res.json({success:false,message:"Id not provided"})
                }
    }
    
    //delete the user
    async deleteUser(req,res){
        const {id} = req.params;
        if(id){
            const user = await User.findByIdAndDelete({_id:id});
            if (user) {
                res.json({ success: true, message: "Successfully Deleted" });
              } else {
                res.json({ success: false, message: "Couldn't Delete the user" });
              }
        }else{
            res.json({ success: false, message: textConstant.USER_ID_NOT_PROVIDED });
        }
    }

    //update user
    async updateUser(req,res){
        const {id} = req.params;
        if (id) {
            const user = await User.findByIdAndUpdate(id, req.body, {
              new: true,
            });
            if (user) {
              res.json({ success: true, message: "Successfully updated" });
            } else {
              res.json({ success: false, message: "Couldn't update user" });
            }
          } else
            res.json({ success: false, message: textConstant.USER_ID_NOT_PROVIDED });
    }


}
