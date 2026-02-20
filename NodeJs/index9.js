import express from 'express'
const app = express()
app.listen(8080)
const logger=(req,res,next)=>{
    req.message = "This is logger function "
    console.log(req.url)
    next()
}
// app.use(logger)
app.get("/",(req,res)=>{
     console.log(req.message)
     console.log(req.url)
   res.send({
    name:"John ",
    age:21
   })   //if not give server hang infinite loop 
})

app.get("/",logger,(req,res)=>{
    // app.use(logger)
    console.log(req.message)
    res.send(users)
})