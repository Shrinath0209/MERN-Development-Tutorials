import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Sum is:", sum);
});
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

const sum = num1 + num2;

// Basic route
app.get("/", (req, res) => {
  res.send(`Sum is: ${sum}`);
})