import express from "express";
const app = express();
app.listen(8080, () =>{
    console.log("Server started")
});
app.get("/", (req, res) => {
 
  res.send("hello" + req.query.name + req.query.age);
});