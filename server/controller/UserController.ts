import { Request,Response } from "express";
import User from "../models/UserModel";
import { AuthRequest } from "../middleware/verifyToken";
import bcrypt from "bcrypt";
class UserController{
    public static async getUser(req:Request,res:Response){
        const id=req.params.id;
       try {
         const user=await User.findOne({_id:id});
         if (!user){
            return res.status(404).json({'msg':'User Not Found'});
         }

         res.status(200).json({'msg':'User a found',user});
       } catch (error) {
         res.status(500).json(error);
       }     
    }

    public static async userUpdate(req:Request,res:Response){
      try {
        const id=req.params.id;
        const {password}=req.body;
        const hashPassword= bcrypt.hashSync(password,10)
        const userUpdate=await User.findByIdAndUpdate(id,{...req.body,password:hashPassword},{new:true});
        res.status(200).json({'msg':'User Updated',userUpdate});
      } catch (error) {
        res.status(500).json(error);
      }
    }
    
}


export default UserController;