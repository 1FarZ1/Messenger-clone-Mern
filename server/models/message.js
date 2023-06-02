const mongoose = require("mongoose");


const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: mongoose.Types.ObjectId,
            ref:"Conversation",  
            required: [true, "Please provide conversation id"]
          },
        sender: {
          type: mongoose.Types.ObjectId,
          ref:"User",
          required: [true, "Please provide user id"]
        },
        text: {
          type: String,
          max:50,
          required: [true, "Please provide the message"]
        },
      },
      { timestamps: true }
);

module.exports = mongoose.model("Message2",MessageSchema);