import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const url = process.env.MONGODB_URL || ""
        if (!url) {
            console.log("Connection String is Required")
            return
        }
        await mongoose.connect(url)
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("Error in ConnectDB function")
    }
}

export default connectDB;