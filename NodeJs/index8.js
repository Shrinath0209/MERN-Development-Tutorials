import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server Started")
})
// const greet =(req,res,next)=>{
//     console.log("Hello World")
//     next()
// }
// app.use(greet)
app.use(express.json())
const users = [
    {id:1,name:"John",email:"john@gamil.com",role:"student"},
    {id:2,name:"Cathy",email:"cathy@gamil.com",role:"student"},
    {id:3,name:"Admin",email:"admin@gamil.com",role:"admin"},
]
app.get("/",(req,res)=>{
    res.send(users)
})
app.get("/:id",(req,res)=>{
    const user = users.find((user) => user.id === Number(req.params.id));
    res.send(user)
})
app.post("/",(req,res)=>{
    const user =  req.body
    users.push(user)
    res.json(users)
    
})
app.post("/", (request, response) => {
//   console.log(request.body);
  const user = request.body
  users.push(user)
  response.status(201).json(users);
});

app.delete("/:id",(request,response)=>{

})

app.get("/:id", (request, response) => {
  const user = users.find((user) => user.id === Number(request.params.id));
  if (user) {
    response.json(user);
  }
});