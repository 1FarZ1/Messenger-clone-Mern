const Message = require('../models/message');
const Conversation = require('../models/coversation');
const User = require("../models/user");



const getMessages = async (req, res) => {
    try {
        const { convId } = req.params;
        const messages = await Message.find({
            conversationId: convId
        }).sort({ createdAt: -1 }).select("-conversationId");

        let userId = req.user.userId;
        let result = []
        messages.forEach((elm) => {
            let user = User.findById(elm.sender).select("username profilePicture");

            result.push({
                user, msg: elm.text, time: elm.createdAt, fromYou: user._id == userId
            });
        });
        
        return res.status(200).json({
            result,
        })
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        });
    }

}


const addMessage = async (req, res) => {
}

module.exports = {
    getMessages,
    addMessage
}