import { Request, Response } from "express";
import uploadOnCloudinary from "../utils/cloudinary";
import Post from "../models/post.model";

export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        // const owner = req._id;
    
        if (!title || !description) {
            return res.status(400).json({ success: false, message: "All Fields Are Required" })
        }
    
        if (!req.file) {
            return res.status(400).json({ success: false, message: "File Are Required" })
        }
    
        let image = await uploadOnCloudinary(req.file.path)
    
        let post = await Post.create({
            title, content: image, description,
        })

        return res.status(200).json({success : true , message: "Post Created Successfully"})
    } catch (error) {
        
    }
}