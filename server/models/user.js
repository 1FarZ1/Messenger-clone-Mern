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
    profilePicture:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAJFBMVEX////d3d3c3Nz4+Pjm5ub7+/vh4eHq6ur19fXy8vLu7u7Z2dk19XF3AAAEzUlEQVRogcVb2QKkIAxbuY///98Fj/GEphV38zijRmhpG6h//ghgQ0zemwXepxis5DFc6OideoLzUX/Ia6OZJqWmZ9Q/TPxkAmxybd4Dv0uj6YNRJPFGr0wYyJxcxohX+uzSKGYW8UY/gj1NfOaZfXrLHp2MeWZ38QWzfcG8sIt9PoKu3SFXsqFbl18yV2TJ0N8PeoFg6H7EoBdkz6M2Ywa9QBkG81v/vpHjRh9NzSC3wkjWJZ8gcjueeWYHyO0nzBUk+Xhbb6Bt/hl1Je9TD13XN/LuOk9fUhfyTkoP31IX8nYl9zV1If8vxl65GyaP41JXG/kxo34Uz654jG//YMZn7odZZ/p4lX+5AJUrhzvvvs4JaEV1uqp8tQ7RG0CnnW6+hbcI317lrj4ZrepTzptf3Q1nflR6liUizveiwTSbpsCP8NgvoRXUt1NX3SY0QJyiG2ZtRRW7Gpz4k8Whe5AiHwsSR1fX0GRBuwkeIs+adYMCd5Eg8oP1HOtNCUDT/pv0QE85R9AhzpM3A9JvSnr4EUiVvWUUS085UWFegKzYtWCmM1inzHoEYPL1kaRnsjRshQa4l7hKTnlmb1sAC202I+ka7GFj9VcdEGlufGnvAJZONTidPvnUiP8m4BV7QqYNmrtaknI17gJbQE+6A96wKWO6oC2pAJfkxbQNdFouIoHyClYoP4DOT5oMvjJXAwrfkhpJbuHhBxktCzflFGJu0ofTZ9zkIvvP3FTK+Y7b09zCAxfa1wBu4RpDakDS3vzsPYOOa7SvCWMqlETJohLZfL6DrpqAuCZ0NrruLs8lJ0dkcAtInQDUs1nADexjFHFJl5SSSQfUZfUj+iq+pwPqci5B6Vd83gPtDhtRZH9wDcEAIgbnegi4kBtXaebVizRyIUuaYHsu8yMRn+TMOrYPvzwR2SBhkANhZfpFLOg94VIZPAJY1w6g1HFyDe6qbh4EGBwlR3c1f8sW80vkEBtukvgNBNvSJLeROU0S+34CvO+eTWfo+Ab6cdngx6BK+QY76+DgGCgZp3JqMvfuRJsc67zmWBKwzsaUcibupzU21I4+xv2XUgj1tp0+T87VLk3nVGYfkZ13riTH/Ut/Jv++a4D+/OT7xH1Zqh/2Odyor3mJCuoKNCtw3b0Y6Lh67Tr1KWgMIfnuCelDXmjmvnoKyZVFtvaztp738LDnU70sbniMz31/z82jD+6W3ZsW2/DA3iiAbu6mpLr/h3Sb+VbVeUkpyr1v6r7WEu3RnC6UbjhccFo/vZKT9AkBTj7cuW43OV+DNbHXwX2JsQmkgdQ7OSWmF3977eCyh9aidZCb7agOh9TY5TrZtlYPDhxPWWkjrV0RYUFnxnTs70gZt6JX3P7l/uMy59ClxOGeCmDBGmZeKMLqVQrbERy7A11XCTKA2pdMxk9JZarknyqssGXQolhR5v2lyxUnkx472Popj3ypx/pxj3zm4iT2uepj72KU9TL2mbkll2Ho4nPc76Lqd1eq3WXHYq/dmPCj6suqTn8fF2nKRet4eu5DCcdFH49NB9GoefSpqVFsSPOIlRmdBddO0Cq4nUlRa7u9g7VVg81dquXPj75WrEOrMi/XwU1ux+8n//F3onbVmSfMOvWffJ86v4IOcUHQUtK/HYswl1HlW4MAAAAASUVORK5CYII="
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


