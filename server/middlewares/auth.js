const { isTokenValid } = require("../utils/jwt");


let authMiddleWare = (req,res,next)=>{
    // check from cookies
    try{
        const token =  req.cookie.token;
        if(!token){
            return res.status(403).send("you are not authorized to access this");
        }

       let payload =  isTokenValid(token);

        req.user ={
            username:payload.user.username,
            userId:payload.user.userId
        }

        next();
       
    }
    catch(error){
        console.log(error);
        return res.status(500).send("something went wrong " + error.message);
    }

}


module.exports = authMiddleWare;