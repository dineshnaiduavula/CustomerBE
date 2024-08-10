const a11=require("../controllers/Customer3C")
const a2=require("../models/Customer3M")
const a3=require("express")
const a4=a3.Router()

//post
a4.post("/customer3",a11.a1)
//get
a4.get("/customer3",a11.a2)
//put
a4.put("/customer3",a11.a3)
//delete
a4.delete("/customer3",a11.a4)
module.exports=a4