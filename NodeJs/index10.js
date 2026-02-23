// sending response 
import express from 'express'
const app = express()
app.listen(8080,()=>console.log("Server started"))
app.get("/",(req,res)=>{
    res.json({message:"Hello  world"})
    res.status(201).json({message:"Hello  world"})
})