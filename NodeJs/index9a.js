import express from 'express'
const app = express()
app.listen(8080)
app.use(express.json())
// const auth=(req,res,next)=>{
//      if(req.url === "1234"){
//     next()
//      }else{
//         res.send("Stopped")
//      }
// }
const auth=(req,res,next)=>{
    const newuse= req.body;
    console.log(newuse)
    //   const token = req.body.token
    //   if(token === "1234"){
    //     next()
    //   }else{
    //     res.send("Invalid token")
    //   }
      if(newuse.token === "1234"){
        next()
      }else{
        res.send("Invalid token")
      }
}
app.use(auth)
 

// app.get("/",(req,res)=>{

//      res.send( "Welcome")
// })
app.post("/", (req, res) => {
    res.send("Token accepted. Welcome")
})