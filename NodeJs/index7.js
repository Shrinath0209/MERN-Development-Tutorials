import express from "express";
const app = express();
app.listen(8080, () =>{
    console.log("Server started")
});
app.get("/", (req, res) => {
 const user = {
    name:"John",
    email:"John@gmail.com",
    role:"student"
 }
  res.json(user);
});