// userRouter.getUser("/",(req,res)=>{
//     res.send("This is get request of user router")
// })
// userRouter.createUser("/",(req,res)=>{
//     res.send("This is post request for user request")
// })
const createUser = (req, res) => {
  res.send("This is post request of user router");
};

const getUsers = (req, res) => {
  res.send("This is get request of user router");
  res.json(usrs)
};

export { getUsers, createUser };