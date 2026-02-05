import express, { Router } from "express"
import { forgotPassword, login, logout, resetPassword, signup, verifyEmail } from "../controllers/user.controller";

const authrouter : Router = express()

authrouter.post("/signup" , signup)
authrouter.post("login" , login)
authrouter.post("/verify-email" , verifyEmail)
authrouter.post("/forgot-password" , forgotPassword)
authrouter.post("/reset-password" , resetPassword)
authrouter.get("/logout" , logout)

export default authrouter;