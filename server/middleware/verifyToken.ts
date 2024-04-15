import { NextFunction, Request,Response } from 'express';
import jwt from "jsonwebtoken";


export interface AuthRequest extends Request{
    userId?:string,
}

export const verifyToken = (req:AuthRequest,res:Response,next:NextFunction) =>{
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({'msg':'Not Authenticantied!'});
    }

    const jwtkey:any=process.env.JWT_KEY;

    jwt.verify(token,jwtkey,async (err:any,payload:any)=>{
       if (err){
        return res.status(403).json({'msg':'Token is not Valid'});
       }
       //console.log(payload);
        
       req.userId=payload.id;
       next();
    });
 
}