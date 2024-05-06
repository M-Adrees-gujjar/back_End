const { signUP_DB, logIn_DB } = require('../models/register_account.model');

async function signUp(req, res) {
    const response = req.body;
    let result = await signUP_DB(response.username, response.email, response.password, response.confirm_password);
    res.send({
        response: result
    })
}

async function logIn(req, res) {
    const response = req.body;
    const result = await logIn_DB(response.email, response.password);
    res.send(result);
}

module.exports = { signUp, logIn };

