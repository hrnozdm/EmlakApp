import mongoose, { Schema, Document } from "mongoose";
import { User } from "./UserModel";

enum Type {
    buy = "buy",
    rent = "rent"
}

enum Property {
    apartment = "apartment",
    house = "house",
    condo = "condo",
    land = "land"
}

export interface Pos extends Document {
    user: User['_id'],
    title: string,
    price: string,
    img: string,
    address: string,
    city: string,
    description:string,
    bedroom?: number,
    bathroom?: number,
    latitude?: string,
    longitude?: string,
    type: string, // Type ENUM'u yerine string türü kullanılacak
    property: string // Property ENUM'u yerine string türü kullanılacak
}

const posSchema: Schema = new Schema({
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true,
    },
    bedroom: {
        type: Number
    },
    bathroom: {
        type: Number
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    type: {
        type: String,
        enum: Object.values(Type), 
        required: true
    },
    property: {
        type: String,
        enum: Object.values(Property), 
        required: true
    }
}, { timestamps: true });

const PosModel = mongoose.model<Pos>('Pos', posSchema);

export default PosModel;
