const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    verificationCode:{
        type:String,
     },
     link:{
        type:String
    },
    isVerified:{
        type:Boolean,
    },
    mode:{
        type:String
    }
})


const User=mongoose.model('User',userSchema);


module.exports=User;