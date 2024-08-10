const a11=require("../controllers/Customer1C")
const a2=require("../models/Customer1M")
const a3=require("express")
const a4=a3.Router()

//post
a4.post("/customer1",a11.a1)
//get
a4.get("/customer1",a11.a2)
//put
a4.put("/customer1",a11.a3)
//delete
a4.delete("/customer1",a11.a4)
module.exports=a4