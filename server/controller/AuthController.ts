import { Request,Response } from "express";
import User from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class AuthController{
    public static async register(req:Request,res:Response):Promise<void>{
        try {
          const {password}=req.body;
           const hashPassword=await bcrypt.hashSync(password,10)
          const newUser=new User({...req.body,password:hashPassword});
          await newUser.save();
          res.status(201).json({'msg':'User created',newUser})
        } catch (error) {
           res.status(500).json(error)  
        }
    }

    public static async login(req:Request,res:Response){
      try {
        const {username,password}=req.body;
        const user=await User.findOne({username:username});
        if (!user){
           return res.status(401).json({'msg':'User Not Found'});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);

        if (!isPasswordValid){
          return res.status(401).json({'msg':'Invalid credentials'});
        }

        const jwtKey:any=process.env.JWT_KEY;

        const token =jwt.sign({id:user.id},jwtKey,{expiresIn:'1h'});

        res.cookie('token',token,{httpOnly:true}).status(200).json({'msg':'Login success',user,token});

      } catch (error) {
        res.status(500).json(error);
      }
    }

    public static async logOut(req:Request,res:Response){
      res.clearCookie('token').status(200).json({'msg':'Logout Success'});
    }
}


export default AuthController;