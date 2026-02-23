// import express from 'express'
// const userRouter = express.Router()
// userRouter.get("/",getUser)
// userRouter.post("/",createUser)
// // userRouter.get("/",(req,res)=>{
// //     res.send("This is get request of user router")
// // })
// // userRouter.post("/",(req,res)=>{
// //     res.send("This is post request for user request")
// // })
// export default userRouter;

import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
const userRouter = express.Router();
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
export default userRouter;