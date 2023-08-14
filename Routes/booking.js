const { authenticateUser } = require("../Middlewares/authenticateUser");
const { BookingModel } = require("../Models/booking.model");

const bookingRouter = require("express").Router();




bookingRouter.get("/",authenticateUser,async(req,res)=>{
    try {
        let bookings = await BookingModel.find({userId:req.body.userId})

        res.send(bookings)
    } catch (error) {
        console.log(error)
    }
})

bookingRouter.post("/",authenticateUser,async(req,res)=>{
    try {
        if(!req.body.flightId){res.status(402).json({message:"provide the flight id in the request body"})}
        else {
            let obj ={user:req.body.userId,flight:req.body.flightId }
            res.send(obj)
        }
      
    } catch (error) {
        console.log(error)
    }
})





module.exports={bookingRouter}