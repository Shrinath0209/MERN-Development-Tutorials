// import express from 'express'
// const productRouter = express.Router()
// // productRouter.get("/",(req,res)=>{
// //     res.send("this is get request for product router ")
// // })
// // productRouter.post("/",(req,res)=>{
// //     res.send("This is post request of product router")
// // })
// export default productRouter

import express from "express"
import { addProduct,getProducts } from "../controllers/productController.js"
const productRouter = express.Router()
productRouter.get("/",getProducts)
productRouter.post("/",addProduct)
export default productRouter