import express from "express";
const app = express();
app.listen(8080, () => console.log("Server started"));
app.get("/:id", (req, res) => {
  console.log(req.headers.authorization);
  res.send(req.params.id);
});