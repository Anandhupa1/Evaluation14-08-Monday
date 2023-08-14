const express = require("express");
const app = express();
const connection = require("./configs/mongoose.connection");
const {  authenticateRouter } = require("./Routes/authenticate");
const { authenticateUser } = require("./Middlewares/authenticateUser");
const { flightRouter } = require("./Routes/flights");


app.use(express.json())

app.get("/",authenticateUser,async(req,res)=>{
    try {
       res.send(req.body)
    } catch (error) {
        console.error(error)
    }
})



app.use("/api",authenticateRouter)
app.use("/api/flights",flightRouter)



app.listen(4000,async(req,res)=>{
    try {
        await connection;
        console.log("connected to atlas")
    } catch (error) {
        console.error("error in connection",error)
    }
    console.log("app started at http://localhost:4000")
})