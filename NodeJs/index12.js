// router
import express from 'express'
  
// app.listen(8080,()=>console.log("Server Started"))
// const userRouter = express.Router()
// const productRouter = express.Router()

// userRouter.get("/",(req,res)=>{
//     res.send("This is get request of user router")
// })
// userRouter.post("/",(req,res)=>{
//     res.send("This is post request for user request")
// })
// productRouter.get("/",(req,res)=>{
//     res.send("this is get request for product router ")
// })
// productRouter.post("/",(req,res)=>{
//     res.send("This is post request of product router")
// })
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
const app = express()
app.listen(8080,()=>console.log("ServerStarted"))
app.use("/api/users",userRouter)
app.use("/api/product",productRouter)