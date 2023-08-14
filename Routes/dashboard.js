const { BookingModel } = require("../Models/booking.model");

const dashboardRouter = require("express").Router();



dashboardRouter.patch("/:id",async(req,res)=>{
    
    let updatedBooking = await BookingModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(204).send(updatedBooking)
    
})
dashboardRouter.delete("/:id",async(req,res)=>{
    
    let updatedBooking = await BookingModel.findByIdAndDelete(req.params.id,req.body,{new:true})
    res.status(202).send(updatedBooking)
    
})
dashboardRouter.get("/",async(req,res)=>{
    
    let bookings = await BookingModel.aggregate([
        {
            $lookup:
              {
                from: "flights",
                localField: "flight",
                foreignField: "_id",
                as: "flightDetails",
              }
         },
        {
            $lookup:
              {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "userDetails",
              }
         }
    ])

    res.send(bookings)
})













module.exports={dashboardRouter}