import express, { Application, Request, Response } from "express"
import dotenv from "dotenv"
import connectDB from "./db/db"
import authrouter from "./routes/user.route"


dotenv.config()
const app: Application = express()

app.use(express.json())

app.use("api/user" , authrouter);

const port: number | string = process.env.PORT || 5000

connectDB()
app.listen(port, (): void => {
    console.log("Server is Running on Port : ", port)
})