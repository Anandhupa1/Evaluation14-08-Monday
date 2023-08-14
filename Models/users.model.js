const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
})

userSchema.pre('save',async function(next){
    try{
    if(this.isNew){
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(this.password,salt);
     this.password = hashedPassword;
    }
    next()
    }catch(err){console.log("error in password hashing__________");next(err)}
})

const UserModel  = mongoose.model("user",userSchema);

module.exports={UserModel}