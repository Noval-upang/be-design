import express from "express";
import cors from "cors"
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({origin:process.env.ORIGIN, methods:"POST"}))

app.get("/test", (_, res)=> {
   return res.json({data: "Ok"})
})

app.post("/add", (req, res)=>{
   return res.json({data: !req.body.data ?   "kosong" : req.body.data})
})

app.listen("8000", ()=>console.log("runing"))