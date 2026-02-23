import express from 'express'
import jwt from "jsonwebtoken"
const app = express()
const SECRET = "lpu"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtaWFsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDE5OCwiZXhwIjoxNzcxODM3Nzk4fQ.Cnkr78dWAiwDPgqfJTPS0n-jJtkc02_pOh_ah7KofkU"
const user = jwt.verify(token,SECRET)
console.log(user)