import mongoose, { Model, Models, Schema, Types } from "mongoose";

export interface Tpost {
    _id?: string,
    title : string
    content: string,
    description: string,
    likes: number,
    comment: [],
    user: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date
}

const postSchema = new mongoose.Schema<Tpost>({
    title : {
        type : String,
        required : true
    },
    content: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default : 0
    },
    comment: {
        type: [],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

const Post: Model<Tpost> = mongoose.models.Post || mongoose.model<Tpost>("Post", postSchema)

export default Post;