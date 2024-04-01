const express = require("express") ;
const router = express.Router() ;

const {addUserData,getAllUserData,updateUserData,deleteUserData} = require("../controllers/UserController")


router.get("/", (req, res) => {
    res.send(
        `<h1>Welcome to CRUDS app </h1>`
        )
    }) ;


router.post("/add", addUserData) ;
router.get("/read", getAllUserData) ;
router.put("/update/:id",updateUserData) ;
router.delete("/delete/:id", deleteUserData) ;

module.exports = router ;