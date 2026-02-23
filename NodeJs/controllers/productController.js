// productRouter.getUser("/",(req,res)=>{
//     res.send("this is get request for product router ")
// })
// productRouter.createUser("/",(req,res)=>{
//     res.send("This is post request of product router")
// })
const getProducts = (req, res) => {
  res.send("This is get request of product");
};

const addProduct = (req, res) => {
  res.send("This is post request of product router");
};

export { getProducts, addProduct };