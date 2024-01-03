import express, { Router } from "express";
import cors from "cors"
import dotenv from "dotenv"
import router from "./router";

const 
   app = express()

dotenv.config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(process.env.PORT, ()=>console.log("runing"))