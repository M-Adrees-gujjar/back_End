const mongoose = require('mongoose');
const connection = require('../models/connection.model');
const jwt = require('jsonwebtoken');
const signUP_schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const user_detials = mongoose.model("user_detials", signUP_schema);

async function signUP_DB(username, email, password, confirm_password) {
    try {
        console.log('sig------',username);
        await connection();
        if (password == confirm_password) {
            const user = await user_detials.find({
                email: email,
                password: password
            });
            if (user.length == 0) {
                const user = await user_detials({
                    username: username,
                    email: email,
                    password: password
                });
                await user.save();
                return "SuccessFull"
            } else {
                console.log("Email already Exit");
                return "Email already Exit"
            }
        } else {
            console.log("Password Does not Match with Confirm Password");
            return "Password Does not Match with Confirm Password";
        }
    } catch (error) {
        console.log("Went Wrong");
        return error
    }
}

async function logIn_DB(email, password) {
    try {
        await connection();
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