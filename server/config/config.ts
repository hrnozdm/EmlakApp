import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongooseOption:any={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const mongoUrl:any=process.env.MONGO_URL;
export const connectDb= async ():Promise <void>=>{
    try {
       await mongoose.connect(mongoUrl, mongooseOption);
       console.log("Db connect success");
    } catch (error) {
       console.log(error);
       throw error;
    }
}