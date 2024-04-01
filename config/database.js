const mongoose = require("mongoose") ;
require("dotenv").config()

exports.connect = async () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(console.log("Connected to Database Successfully"))
    .catch((error) => {
        console.log("Database connection failed") ;
        console.log(error.message) ;
        process.exit(1) ;
    })
}