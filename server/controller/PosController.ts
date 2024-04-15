import {Request,Response} from 'express';
import { AuthRequest } from '../middleware/verifyToken';
import Pos from '../models/PosModel';
class PosController {
    public static async addPost(req:AuthRequest,res:Response){
        const tokenId=req.userId;
        try {
          const newPost=new Pos({
            ...req.body,
            userId:tokenId
          });
          await newPost.save();
          res.status(201).json(newPost);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public static async getAllPost(req:AuthRequest,res:Response){
      const tokenId=req.userId;
      try {
        const post = await Pos.find({userId:tokenId});
        if (post.length===0){
          return res.status(404).json({'msg':'Post Not Found'});
        }
        res.status(200).json(post);
        
      } catch (error) {
          res.status(500).json(error);
      }
  }

    
}

export default PosController;