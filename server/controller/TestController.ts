import { Request,Response } from "express";
import { AuthRequest } from "../middleware/verifyToken";
import jwt from "jsonwebtoken";
class TestController {

    public static async shouldBeLoggedIn (req:AuthRequest,res:Response){
         //console.log(req.userId);
         res.status(200).json({'msg':'You are Authenticated'});
    }

    public static async shouldBeAdmin(req:AuthRequest,res:Response){

         const jwtkey:any=process.env.JWT_KEY;
         const token = req.cookies.token;

         if (!token){
            return res.status(401).json({'msg':'Not Authenticated'});
         }

        jwt.verify(token,jwtkey,async (err:any,payload:any)=>{
            //console.log(payload);
            
          if (err){
            return res.status(403).json({'msg':'Token is not valid'});
          }
          
          if (!payload.isAdmin){
            return res.status(401).json({'msg':'Not Authenticated'});
          }

          res.status(200).json({'msg':'You are Authenticated'});

        });



    }
    
}

export default TestController;