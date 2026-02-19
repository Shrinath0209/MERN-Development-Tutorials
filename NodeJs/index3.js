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
app.get("/Home/page1",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.headers.authorization)
    res.send("responded from server / Home/page1")

})
