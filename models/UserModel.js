const mongoose = require("mongoose") ;

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    phoneNumber : {
        type : String,
    },
    email : {
        type : String,
    },
    hobbies : {
        type : String,
    },
},{timestamps:true})

module.exports = mongoose.model("User", userSchema) ;