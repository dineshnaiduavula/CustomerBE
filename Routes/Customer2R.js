const a11=require("../controllers/Customer2C")
const a2=require("../models/Customer2M")
const a3=require("express")
const a4=a3.Router()

//post
a4.post("/customer2",a11.a1)
//get
a4.get("/customer2",a11.a2)
//put
a4.put("/customer2",a11.a3)
//delete
a4.delete("/customer2",a11.a4)
module.exports=a4