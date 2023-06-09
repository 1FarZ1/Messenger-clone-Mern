const mongoose = require("mongoose");


const ConversationSchema = new mongoose.Schema({
    memebers:{
        type:[mongoose.Schema.Types.ObjectId],
        required:[true, "please provide at least 2 user"],
        ref:"User",
        min:2,
    }
},  { timestamps: true })

module.exports = mongoose.model("Conversation",ConversationSchema);