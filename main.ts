import express from "express";
import cors from "cors"
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({
   origin:["https://design-web-production.up.railway.app/test", "https://design-web-production.up.railway.app/add"], 
   methods:"POST, GET",
   allowedHeaders:"application/json",
}))

app.get("/test", (_, res)=> {
   return res.json({data: "Ok"})
})

app.post("/add", (req, res)=>{
   return res.json({data: !req.body.data ?   "kosong" : req.body.data})
})

app.listen("8000", ()=>console.log("runing"))