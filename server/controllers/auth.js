const { attachCookiesToResponse } = require("../utils/jwt");
const User = require("../models/user");
const createTokenUser = require("../utils/createTokenUser");
let register = async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                msg:"please provide all credentials"
            });
        }
        const isExist  = await User.findOne({email}).or({username});
        if(isExist){
            return res.status(400).json({ msg: 'username or email already exist' });
        }

        const user = await User.create({username,email,password});
        let tkUser = createTokenUser(user);
        
        attachCookiesToResponse({res,user:tkUser});

        return res.status(200).json({
            msg:"User Created Successfully",
            user:tkUser        })
    } catch (error) {
        return res.status(500).json({
                msg:error.message
            });
    }

}
let login = async (req,res)=>{
  
    const{email,password}  = req.body;
    if( !email || !password){
        return res.status(400).json({
            msg:"please provide all credentials"
        });
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({
            msg:"wrong email"
        });
    }
    if(!user.cmpPwd(password)){
        return res.status(400).json({
            msg:"wrong Password"
        });
    }
    let tkUser = createTokenUser(user);
    attachCookiesToResponse({res,user:tkUser});
    console.log("before smoothly")
    console.log(req.cookies);
    console.log("it went smothly");
    return res.status(200).send({
        msg:"Logged in Succesfully",
        user:tkUser
        })


}
let logout = async (req,res)=>{
    try {

        if(!req.cookies.token){
            return res.status(400).json({
                msg:"You already logged out"
            });
        }
        
        res.cookie('token', '', {
            httpOnly: true, // only acceced by the server 
            maxAge: 1,// expire after 1 msseconde
            secure:true,
            sameSite:"none",
          });
        return res.status(200).json({
            msg:"Logged out successfully"
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message
        })
    }
   
}


let getOneUser = async  (req,res)=>{
   try{
    const user =await  User.findById(req.params.id).select("-password");
    return res.json({
        user
    })
   }
   catch(e){
    console.log(e.message);
   }
}
let getCurrentUser = async (req,res)=>{
    try {
        const user = await User.findById(req.user.userId).select("-password");
        return res.status(200).json({
            user,
            auth:true,
        })
    }
    catch (error) {
        return res.status(500).json({
            msg:error.message
        })
    }
}




module.exports= 
{
    register,
    login,
    logout,
    getCurrentUser,
    getOneUser
}