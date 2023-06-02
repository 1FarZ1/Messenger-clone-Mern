const mongoose = require("mongoose");


const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: mongoose.Types.ObjectId,
            ref:"Conversation",  
            required:true   
           },
        sender: {
          type: mongoose.Types.ObjectId,
          ref:"User",
          required:true   
        },
        text: {
          type: String,
          max:50,
          required: true,
        },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Message2",MessageSchema);