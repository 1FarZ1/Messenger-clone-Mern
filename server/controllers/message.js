const Message = require('../models/message');
const Conversation = require('../models/coversation');
const User = require("../models/user");



const getMessages = async (req, res) => {
    try {
        const { convId } = req.params;


        if (!convId) return res.status(400).json({ msg: "conversation id is required" });
        const messages = await Message.find({
            conversationId: convId
        }).select("-conversationId");
        let userId = req.user.userId;
        let result = [];
        result = await Promise.all(
        messages.map( async (elm) => {
            let user = await User.findById(elm.sender).select("username profilePicture");
            return {
                user, msg: elm.text, time: elm.createdAt, isMe: user._id == userId
            };
        })
       );
        return res.status(200).json({
            result,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: error.message
        });
    }

}


const addMessage = async (req, res) => {
    const { convId } = req.params;
    const { text } = req.body;
    
    if(!convId) return res.status(400).json({ msg: "conversation id is required" });
    try {
        const conversation = await Conversation.findById(convId);
        if (!conversation) return res.status(400).json({ msg: "wrong conversation id" });

        const message = await Message.create({
            conversationId: convId,
            sender: "647aca2aa86d8588441da464",
            text
        });

        return res.status(200).json({
            msg: "message sent successfully",
            message
        });

    }
    catch (error) {
        return res.status(500).json({
            msg: error.message
        });
    }
}

module.exports = {
    getMessages,
    addMessage
}
