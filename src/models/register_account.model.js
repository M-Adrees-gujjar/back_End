const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const signUP_schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const user_detials = mongoose.model("user_detials", signUP_schema);

async function signUP_DB(username, email, password, confirm_password) {
    try {

        const user_find = await user_detials.findOne({ email: email });

        if (user_find) {
            console.log("user------", user);
            return "Email already Exist"
        }

        const user = await user_detials({
            username: username,
            email: email,
            password: password
        });
        await user.save();
        return "SignUP SuccessFull";

        // if (password == confirm_password) {
        //     const user = await user_detials.find({
        //         email: email,
        //         password: password
        //     });
        //     if (user.length == 0) {
        //         const user = await user_detials({
        //             username: username,
        //             email: email,
        //             password: password
        //         });
        //         await user.save();
        //         return "SignUP SuccessFull"
        //     } else {
        //         console.log("Email already Exist");
        //         return "Email already Exist"
        //     }
        // } else {
        //     console.log("Password Does not Match with Confirm Password");
        //     return "Password Does not Match with Confirm Password";
        // }
    } catch (error) {
        console.log("Some thing Went Wrong---", error);
        return "Some thing Went Wrong---", error;
    }
}

async function logIn_DB(email, password) {
    try {
        const user = await user_detials.find({
            email: email,
            password: password
        });
        if (user.length != 0) {
            const key = jwt.sign(
                {
                    email: email
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: '1h'
                }
            );
            return {
                token: key,
                response: "LogIn SuccessFull"
            }
        } else {
            return {
                response: "Email or Password are not Correct"
            };
        }
    } catch (error) {
        console.log("SomeThing Went Wrong");
        return {
            response: "SomeThing Went Wrong"
        };
    }
}

module.exports = { signUP_DB, logIn_DB };