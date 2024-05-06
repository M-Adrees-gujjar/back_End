const express = require('express');
const route = express.Router();
const { signUp, logIn } = require('../controllers/register_account.controller');

route.post('/signUP', signUp);
route.post('/logIn', logIn);

module.exports = route;
