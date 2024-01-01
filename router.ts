import express from "express";

const router = express.Router()

router.get("/test", (_, res)=> {
   return res.send("OK")
})

router.post("/add", (req, res)=>{
   return res.json({data: !req.body.data ?   "kosong" : req.body.data})
})

export default router