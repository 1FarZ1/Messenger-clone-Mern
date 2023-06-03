const Conversation = require('../models/coversation');
const User = require("../models/user");



const createNewConversation = async (req,res)=>{
    try {
        const {users} = req.body;
        if(!users) return res.status(400).json({msg:"pls provide users"});

        let result = [];
        users.forEach(async (elm)=>{
            const user = await User.findOne({username:elm});
            result.push(user._id);
        });
        const conv = await Conversation.create({
            memebers:[
                result,
            ]
        }
        );
        users.forEach(async (elm)=>{
            const user = await User.findById(elm);
            user.conversations.push(conv._id);
            await user.save();
        });

        return res.status(200).json({msg:"created Successfully",conv});

        
    } catch (error) {
            return  res.status(500).json({
                error:message.error
            });
    }

}


const getConversationsForUser = async (req,res)=>{
    try {
        const {userId} = req.params;
        const user = await User.findById(userId).populate("conversations");
        return res.status(200).json({
            conversations:user.conversations
        });
    } catch (error) {
        return res.status(500).json({
            error:error.message
        });
    }
}


const getConversation = async (req,res)=>{
}
module.exports = 
    {createNewConversation,getConversationsForUser,getConversation }