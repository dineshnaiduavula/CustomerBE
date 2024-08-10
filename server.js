const expServer=require("express")
const expServer1=expServer()
const port=1122
const MongoConnection=require("mongoose")
expServer1.use(expServer.json())
//connecting to mongo server
MongoConnection.connect("mongodb://localhost:27017/CustomerData")
.then(()=>{console.log("connected to mongo server")})
.catch((error)=>{console.log(`error while connecting to mongoserver${error}`)})

//connecting to port server
expServer1.listen(port,(error)=>{
    if(error){console.log(`error while connecting to server${error}`)}
    else{console.log("successfully connected to node server")}})