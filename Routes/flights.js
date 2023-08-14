const { FlightModel } = require("../Models/flight.model");
const ObjectId = require('mongoose').Types.ObjectId;
const flightRouter = require("express").Router();


flightRouter.get("/",async(req,res)=>{
    try {
        let data = await FlightModel.find();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

flightRouter.get("/:id",async(req,res)=>{
    try {
        function isValidObjectId(id){
    
            if(ObjectId.isValid(id)){
                if((String)(new ObjectId(id)) === id)
                    return true;
                return false;
            }
            return false;
        }
        let value = isValidObjectId(req.params.id)
        if(!value){res.status(422).json({message:"please provide a valid Object id"})}
        else{
        let data = await FlightModel.findById(req.params.id);
        if(!data){res.status(401).json({message:"no flight exists with the given id"})}
        else { res.send(data)}
        }
       
    } catch (error) {
        console.log(error)
    }
})

flightRouter.post("/",async(req,res)=>{
    try {
        let { airline,flightNoedeparture, arrival,departureTime,arrivalTime,seats, price}= req.body
    
        let newFlight = new FlightModel(req.body);
        let out = await newFlight.save();
        res.send(out)
    } catch (error) {
        console.log(error)
    }
})









module.exports={flightRouter}