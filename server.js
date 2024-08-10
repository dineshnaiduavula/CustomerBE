const expServer=require("express")
const expServer1=expServer()
const port=1122
const MongoConnection=require("mongoose")
const rou=require("./Routes/Customer1R")
const rou1=require("./Routes/Customer2R")
const rou2=require("./Routes/Customer3R")
expServer1.use(expServer.json())

//connecting to mongo server
MongoConnection.connect("mongodb://localhost:27017/CustomerData")
.then(()=>{console.log("connected to mongo server")})
.catch((error)=>{console.log(`error while connecting to mongoserver${error}`)})
 
//router
expServer1.use("/",rou)
expServer1.use("/",rou1)
expServer1.use("/",rou2)
//connecting to port server
expServer1.listen(port,(error)=>{
    if(error){console.log(`error while connecting to server${error}`)}
    else{console.log("successfully connected to node server")}})