const { attachCookiesToResponse } = require("../../../Ecommerce-Api-NodeJs/utils/jwt");
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
        attachCookiesToResponse(res,tkUser);
        return res.status(200).json({
            msg:"User Created Successfully",
            user:tkUser,
        })
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
    const user = User.findOne({email});
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
    attachCookiesToResponse(res,tkUser);
    return res.status(200).send({
        msg:"Logged in Succesfully",
        user:tkUser
    })


}
let logout = async (req,res)=>{

}


module.exports= 
{
    register,
    login,
    logout
}