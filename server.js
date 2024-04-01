const express = require("express") ;
const dotenv = require("dotenv") ;
const database = require("./config/database") ;
const cors = require("cors") ;
const userRoutes = require("./routes/UserRoute")

const app = express() ;
dotenv.config() ;
const PORT = process.env.PORT || 5000 ;

app.use(express.json()) ;
app.use(cors()) ;
database.connect() ;


app.use("/api/v1", userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
