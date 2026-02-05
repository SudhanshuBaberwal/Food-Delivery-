import mongoose, { Model, Schema, Types } from "mongoose";

export interface Tuser{
    _id? : string,
    username : string,
    email : string,
    password : string,
    image? : string,
    post : Types.ObjectId
    isVerified : boolean,
    lastLogin : Date,
    verificationToken : string,
    verificationTokenExpiresAt : Date,
    resetToken : string,
    resetTokenExpiresAt : string,
    createdAt? : Date,
    updatedAt? : Date
}

const userSchema = new mongoose.Schema<Tuser>({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email  : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    lastLogin : {
        type : Date,
        default : Date.now()
    },
    post : {
        type : Schema.Types.ObjectId,
        ref : "Post"
    },
    verificationToken : String,
    verificationTokenExpiresAt : Date,
    resetToken : String,
    resetTokenExpiresAt : Date
} , {timestamps : true})


const User : Model<Tuser> = mongoose.models.User || mongoose.model<Tuser>("User" , userSchema)

export default User;