const express = require("express");
const app = express();
const connection = require("./configs/mongoose.connection");




app.get("/",async(req,res)=>{
    try {
       res.send("home page")
    } catch (error) {
        console.error(error)
    }
})






app.listen(4000,async(req,res)=>{
    try {
        await connection;
        console.log("connected to atlas")
    } catch (error) {
        console.error("error in connection",error)
    }
    console.log("app started at http://localhost:4000")
})