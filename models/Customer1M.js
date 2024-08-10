const mongoDb=require("mongoose")

const customerdata=new mongoDb.Schema({
    productname:{type:String,required:true},
    productValue:{type:Number,required:true}
})

module.exports=mongoDb.model("customer1Data",customerdata)  