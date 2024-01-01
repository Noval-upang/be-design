import express from "express";

const router = express.Router()

router.get("/test", (_, res)=> {
   return res.json({data: "Ok"})
})

router.post("/add", (req, res)=>{
   return res.json({data: !req.body.data ?   "kosong" : req.body.data})
})

export default router