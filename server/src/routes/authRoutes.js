const { login } = require("../controllers/authControllers/login");
const { Register } = require("../controllers/authControllers/register");
const express = require('express');
const authRoute = express.Router();


authRoute.post('/login', login)
authRoute.post('/register', Register)

exports.authRoute = authRoute