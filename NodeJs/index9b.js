import express from 'express'
const app = express()
app.listen(8080)
app.use(express.json())

const auth=(req,res,next)=>{
    const token = req.headers.authorization
    const val = token.split(" ")
    if(val[1]==="1234"){
        next()
    }else{
        res.send("Denied")
    }
       
}
app.use(auth)
 

app.get("/",(req,res)=>{

     res.send( "Welcome")
})
// app.post("/", (req, res) => {
//     res.send("Token accepted. Welcome")
// })