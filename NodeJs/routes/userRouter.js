import express from 'express'
const userRouter = express.Router()
userRouter.get("/",(req,res)=>{
    res.send("This is get request of user router")
})
userRouter.post("/",(req,res)=>{
    res.send("This is post request for user request")
})
export default userRouter;