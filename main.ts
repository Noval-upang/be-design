import express, { Router } from "express";
import cors from "cors"
import dotenv from "dotenv"
import router from "./router";

const 
   app = express()

dotenv.config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({
   origin: "*",
   methods:"POST, GET",
   optionsSuccessStatus:200
}))

app.use(router)

app.listen("8000", ()=>console.log("runing"))