const { signUP_DB, logIn_DB } = require('../models/register_account.model');

async function signUp(req, res) {
    const response = req.body;
    console.log("res--------", response);
    if (Object.keys(response).length == 0) {
        res.status(204).send("Request Data is Empty");
    } else {
        try {
            let result = await signUP_DB(response.username, response.email, response.password, response.confirm_password);
            res.send({
                response: result
            })
        } catch (error) {
            res.status(400).send("Invalid or Wrong--", error);
        }
    }
}

async function logIn(req, res) {
    const response = req.body;
    console.log("res--------", response);
    if (Object.keys(response).length == 0) {
        res.status(204).send("Request Data is Empty");
    } else {
        try {
            const result = await logIn_DB(response.email, response.password);
            res.send(result);
        } catch (error) {
            res.status(400).send("Invalid or Wrong--", error);
        }
    }
}

module.exports = { signUp, logIn };

