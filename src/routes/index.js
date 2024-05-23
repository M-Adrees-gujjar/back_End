const express = require('express');
const route = express.Router();
const { signUp, logIn } = require('../controllers/register_account.controller');

route.get('/', function (req, res) {
    res.status(200).send("'API is Working'")
})

route.post('/signUP', signUp);
route.post('/logIn', logIn);

module.exports = route;
