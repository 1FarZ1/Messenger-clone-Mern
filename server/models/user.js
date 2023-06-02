const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const validatorJs = require("validator");


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provide an username"],
        min:3,
        max:20,
        unique: true,


    },
    email:{
        type:String,
        required:[true,"please provide an email"],
        unique: true,
        validator:{
            validator:validatorJs.isEmail,
            message:"please provide valid email"
        }

    },
    password:{
        type:String,
        required:[true,"please provide an password"],
        min:8,


    },
    
    Contacts:{
        type:[mongoose.Types.ObjectId],
        ref:"User",
        default:[],


    },
    city:{
        type:String,
        required:[true,"please provide  a city"],
        max:20,
    },
    profilePicture:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:"no desc",
        max:50,
    },
    isAdmin:{
        type:Boolean,
        default:false,

    },


},{
    timestamps:true
});

UserSchema.pre('save', async function (){
    if (!this.isModified('password')) return; // check if the password got changed if so we hash it 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });


UserSchema.methods.cmpPwd = async function (pwd) {  
    const isMatch = await bcrypt.compare(pwd, this.password);
    return isMatch;
  };


module.exports =  mongoose.model("User",UserSchema);


