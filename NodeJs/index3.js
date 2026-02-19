import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server started")
})
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("responded from server /")

})
app.get("/Home",(req,res)=>{
    console.log(req.url)
    res.send("responded from server / Home")

})
