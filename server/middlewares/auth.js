const { isTokenValid } = require("../utils/jwt");


let authMiddleWare = (req,res,next)=>{
    // check from cookies
    try{

        console.log(req.cookies);
        
        let token;
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer')) {
          token = authHeader.split(' ')[1];
        }
      
        // otherwise check if sent in cookies
        else if (req.cookies.token) {
          token = req.cookies.token;
        }
        if(!token){
            return res.status(200).json({
              msg:"the user not authenticared",
              auth:false,
            });
        }

       let payload =  isTokenValid(token);


        req.user = {
            username:payload.name,
            userId:payload.userId
        }

        next();
       
    }
    catch(error){
        console.log(error);
        return res.status(500).send("something went wrong " + error.message);
    }

}


module.exports = authMiddleWare;