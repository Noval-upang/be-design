import express from "express";
import cors from "cors"
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors({origin:process.env.ORIGIN, methods:"POST"}))

app.post("/add", (req, res)=>{
   res.json(req.body.data)
})

app.listen("8000", ()=>console.log("runing"))