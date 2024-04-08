import mongoose,{Schema,Document} from "mongoose";

export interface User extends Document{
    email:string
    username:string
    password:string
    avatar:string
}

const userSchema:Schema = new Schema({
 username:{type:String,unique:true},
 email:{type:String,unique:true},
 password:{type:String,required:true},
 avatar:{type:String}
},{timestamps:true});

const UserModel = mongoose.model<User>('User',userSchema);

export default UserModel;
