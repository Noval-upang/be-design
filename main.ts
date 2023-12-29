import express from "express";
import cors from "cors"
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({
   origin: "*",
   methods:"POST, GET",
   optionsSuccessStatus:200
}))

app.use((_, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   next();
})

app.get("/test", (_, res)=> {
   return res.json({data: "Ok"})
})

app.post("/add", (req, res)=>{
   return res.json({data: !req.body.data ?   "kosong" : req.body.data})
})

app.listen("8000", ()=>console.log("runing"))