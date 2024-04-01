const User = require("../models/UserModel") ;


exports.addUserData = async (req, res) => {
    try {
        // get data from req body 
        const {name,email,phoneNumber,hobbies} = req.body ;

        // validation
        if(!name || !email || !phoneNumber || !hobbies){
            return res.status(400).json({
                success : false,
                message : "Please fill all details"
            })
        }

        // email validation
        const dataByEmail = await User.findOne({email : email}) ;
        if(dataByEmail) {
            return res.status(400).json({
                success : false,
                message : "User Data with this Email Id already used"
            })
        }

        const dataByNumber = await User.findOne({phoneNumber : phoneNumber}) ;
        if(dataByNumber) {
            return res.status(400).json({
                success : false,
                message : "User Data with this Phone Number already used"
            })
        }

        // create User Data

        const userData = await User.create({
            name : name,
            email : email,
            phoneNumber : phoneNumber,
            hobbies : hobbies,
        })
        console.log("User Data => ", userData);

        return res.status(200).json({
            success : true,
            message : "User data added successfully",
            userData
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to add User data",
        })
    }
}

exports.getAllUserData = async (req, res) => {
    try {
        const allUser = await User.find({}) ;
        if(!allUser){
            return res.status(400).json({
                success : false,
                message : "No user exist, create a new entry"
            })
        }

        return res.status(200).json({
            success : true,
            message : "All User data fetched successfully",
            allUser
        }) 
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to add User data",
        })
    }
}

exports.updateUserData = async (req, res) => {
    try {

        const id = req.params.id ;
        // get data from req body 
        const {name,email,phoneNumber,hobbies} = req.body ;

        // validation
        if(!name || !email || !phoneNumber || !hobbies){
            return res.status(400).json({
                success : false,
                message : "Please fill all details"
            })
        }

        const userData = {
            name : name ,
            email : email,
            phoneNumber : phoneNumber,
            hobbies : hobbies
        }

        console.log(userData)

        // find by id and update
        const user = await User.findByIdAndUpdate(
            {_id : id},
            userData,
            {new : true}
        ) ;
        console.log(user)
        if(!user){
            return res.status(400).json({
                success : false,
                message : "User with this Id doest not exist"
            })
        }

        return res.status(200).json({
            success : true,
            message : "User data updated successfully",
            user,
        })


    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to update user data"
        })
    }
}

exports.deleteUserData = async (req, res) => {
    try {
        const id = req.params.id ;
        if(!id) {
            return res.status(400).json({
                success : false,
                message : "User with this Id doest not exist"
            })
        }
        await User.findByIdAndDelete({_id : id}) ;

        return res.status(200).json({
            success : true,
            message : "User data deleted successfully",
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success : false,
            message : "Failed to delete user data"
        })
    }
}