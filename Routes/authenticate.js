const { UserModel } = require("../Models/users.model");
const bcrypt = require("bcrypt")
const authenticateRouter = require("express").Router();
const jwt = require("jsonwebtoken")
//register
authenticateRouter.post("/register",async(req,res)=>{
    try {
      
       if(!req.body.name){res.status(422).send({message:"please enter your name"})}
       else if(!req.body.email){res.status(422).send({message:"please enter your email"})}
       else if(!req.body.password){res.status(422).send({message:"please enter a password"})}
       else{
        let userExists = await UserModel.findOne({email:req.body.email});
        if(userExists){res.status(409).json({message:"user already exists with this email, please login "})}
        else{
        let newUser = new UserModel(req.body);
        let out = await newUser.save();
        res.send(out)
        }
       }
    } catch (error) {
        console.error("error in register",error)
    }
})

//login
authenticateRouter.post("/login",async(req,res)=>{
    try {
      
        if(!req.body.email){res.status(422).send({message:"please enter your email"})}
        else if(!req.body.password){res.status(422).send({message:"please enter a password"})}
        else{
         let userExists = await UserModel.findOne({email:req.body.email});
         if(!userExists){res.status(401).json({message:"No user exists with this email,please register"})}
         else{
         //_______________________________________
         const value = await bcrypt.compare(req.body.password,userExists.password);
         if(!value){res.status(401).json({message:"enter correct  password"})}
         else {
            const  token = jwt.sign({ userId: userExists._id }, 'masai');
            res.status(201).json({message:`Hi ${userExists.name } , you have logged in successfully `,
                                  token : token       })
            
         }


        //_________________________________
         }
        }
     } catch (error) {
         console.error("error in login",error)
     }
})



module.exports={authenticateRouter}