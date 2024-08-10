const a=require("../models/Customer2M")

//post
const a1=async(req,res)=>{
    try{const a2=new a(req.body)
        const a3=await a2.save()
        res.status(201).json(a3)}
    catch(error){res.status(500).json({message:'error while sending data'})}}
//get
const a2=async(req,res)=>{
    try{ const a2=await a.find()
        res.status(201).json(a2)}
    catch(error){res.status(500).json({message:'error while feaching data'})}}
//put
const a3=async(req,res)=>{
    try{const {productname,productValue}=req.body
        const a2=await a.findByIdAndUpdate(req.body._id,{productname,productValue})
        res.status(200).json("success")
    }
    catch(error){res.status(500).json({message:'error while editing data'})}}
//delete
const a4=async(req,res)=>{
    try{const a2=await a.findByIdAndDelete(req.body._id)
    res.status(200).json("success")}
    catch(error){res.status(500).json({message:'error while deleting'})}
}
module.exports={a1,a2,a3,a4}