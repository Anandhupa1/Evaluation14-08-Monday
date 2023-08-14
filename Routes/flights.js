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
        let { airline,flightNo , departure, arrival,departureTime,arrivalTime,seats, price}= req.body
        if(!airline || !flightNo || !departure || !arrival || ! departureTime || !seats || !price){
            res.status(422).json({message:"please fill all the entries"})
        }else {
            let flightExists =await FlightModel.findOne({flightNo:req.body.flightNo, airline:req.body.airline})
            if(flightExists){res.status(201).json({message:`flight with airline :  ${flightExists.airline} adn 
             flightNo : ${flightExists.flightNo} already exists`})}
             else {
                let newFlight = new FlightModel(req.body);
                let out = await newFlight.save();
                res.send({message:"flight created successfully  , ",details:out})
             }
           
        }
        
    } catch (error) {
        console.log(error)
    }
})

//patch 
flightRouter.patch("/:id",async(req,res)=>{
    try {
        
        let id = req.params.id
        let flightExists = await FlightModel.findById(req.params.id)
        if(!flightExists){res.status(401).json({message:"No flight found with given id"})}
        else {
            let data =await FlightModel.findByIdAndUpdate(req.params.id, req.body,{new:true} )
            res.send(data)
        }
        
        
    } catch (error) {
        console.log(error)
    }
})

//patch 
flightRouter.delete("/:id",async(req,res)=>{
    try {
        
      
        let flightExists = await FlightModel.findById(req.params.id)
        if(!flightExists){res.status(401).json({message:"No flight found with given id"})}
        else {
            let data =await FlightModel.findByIdAndDelete(req.params.id )
            res.status(202).json({message:"deleted successfully ", data })
        }
        
        
    } catch (error) {
        console.log(error)
    }
})









module.exports={flightRouter}