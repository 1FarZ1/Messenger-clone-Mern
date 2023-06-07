const jwt = require("jsonwebtoken")

const isTokenValid = (tk) =>  jwt.verify(tk,process.env.JWT_SECRET);

const createJwt = ({payload})=>{
     return jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_LIFETIME,
      });
}

// this is for setup the cookies for web , with cookies ,
const attachCookiesToResponse = ({ res, user }) => {
   try {
    const token = createJwt({ payload: user });
  
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("token",token,{ 
      httpOnly: true ,
      secure:true,
      sameSite:"none",
      maxAge: 2 * 60 * 60 * 1000
   });
  

    
   } catch (error) {
      console.log(error);
   }




  };
  
module.exports = {
    isTokenValid,
    createJwt,
    attachCookiesToResponse
}