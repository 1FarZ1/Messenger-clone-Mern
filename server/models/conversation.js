const mongoose = require("mongoose");


const ConversationSchema = new mongoose.Schema({
    memebers:{
        type:[mongoose.Types.ObjectId],
        required:true,
        ref:"User",
    }
},  { timestamps: true })

module.exports = mongoose.model("Conversation",ConversationSchema);