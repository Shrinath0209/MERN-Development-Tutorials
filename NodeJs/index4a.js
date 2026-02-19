import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server started")
})
app.get("/:num1/:num2", (req, res) => {
    // FIX 1: Use Capital 'N' for Number
    // FIX 2: Ensure the param names match the route (num1 and num2)
    const n1 = Number(req.params.num1);
    const n2 = Number(req.params.num2);
    
    const sum = n1 + n2;

    // FIX 3: Use the variables you just created (n1 and n2)
    res.send(`The sum of ${n1} and ${n2} is: ${sum}`);
});
 
app.get("/:num1/:num2", (req, res) => {
    // FIX 1: Use Capital 'N' for Number
    // FIX 2: Ensure the param names match the route (num1 and num2)
    const n1 = Number(req.params.num1);
    const n2 = Number(req.params.num2);
    
    const sum = n1 + n2;

    // FIX 3: Use the variables you just created (n1 and n2)
    res.send(`The sum of ${n1} and ${n2} is: ${sum}`);
});
 
 

// Define the route to match the pattern: /x/:num1/y/:num2/z/:num3
app.get("/x/:num1/y/:num2/z/:num3", (req, res) => {
    
    // 1. Extract values and convert to Number (Capital 'N')
    const n1 = Number(req.params.num1)
    const n2 = Number(req.params.num2)
    const n3 = Number(req.params.num3)
    
    // 2. Calculate the sum
    const totalSum = n1 + n2 + n3
    
    // 3. Send the response
    res.send(`The sum of ${n1}, ${n2}, and ${n3} is: ${totalSum}`)
})

 
  