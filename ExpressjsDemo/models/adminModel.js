
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    userName:{type:String,required:true},
    passord:{type:String,required:true},
    emailId:{type:String,required:true , unique:true},
    isActive:{type:Boolean,required:true,default:false},
    hasRole:{type:String,enum:['admin','user'],default:'user'},
    createsAt:{type:Date,default:Date.now}

})

const UserModel = new mongoose.model('UserData', UserSchema)
module.exports =  UserModel;