const { authenticateUser } = require("../Middlewares/authenticateUser");
const { BookingModel } = require("../Models/booking.model");

const bookingRouter = require("express").Router();




bookingRouter.get("/",authenticateUser,async(req,res)=>{
    try {
        let bookings = await BookingModel.aggregate([
            {
                $lookup:
                  {
                    from: "flights",
                    localField: "flight",
                    foreignField: "_id",
                    as: "flightDetails",
                  }
             }
        ])

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
            let bookinExists = await BookingModel.findOne(obj)
            if(bookinExists){res.status(409).json({message:"you have already booked this flight"})}
            else{
                let newBooking = new BookingModel(obj);
                let out = await newBooking.save();
                res.send(out)
            }
           
        }
      
    } catch (error) {
        console.log(error)
    }
})





module.exports={bookingRouter}