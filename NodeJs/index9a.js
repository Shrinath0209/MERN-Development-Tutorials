import express from 'express'
const app = express()
app.listen(8080)
const auth=(req,res,next)=>{
     if(req.url === "/1234"){
    next()
     }else{
        res.send("Stopped")
     }
}
app.use(auth)
 

app.get("/:id",(req,res)=>{
   
     res.send( "Welcome")
})