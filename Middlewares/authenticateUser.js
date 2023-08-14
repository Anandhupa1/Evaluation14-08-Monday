const jwt =require("jsonwebtoken")

async function authenticateUser (req,res,next){
    try {
        let incToken= req.headers.token;
        await jwt.verify(incToken, 'masai', function(err, decoded) {
        
       
           //_________________________
              if(err){
                
                res.status(401).json({error:"invalid token"})
            }
            else {
                //console.log(decoded.userId,"decoded");
                req.body.userId =decoded.userId;
                //console.log(req.body)
    
               next()
            }
        }); 
    } catch (error) {
        console.log(error)
    }
  

}

module.exports={authenticateUser}