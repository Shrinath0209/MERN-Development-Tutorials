import express from 'express'
const app = express()
app.listen(8080)
const users = [
    {id:1,name:"John",email:"john@gamil.com",role:"student"},
    {id:2,name:"Cathy",email:"cathy@gamil.com",role:"student"},
    {id:3,name:"Admin",email:"admin@gamil.com",role:"admin"},
]
app.get("/",(req,res)=>{
    res.send(users)
})
// app.get("/",(req,res)=>{
//     res.send(users)
// })