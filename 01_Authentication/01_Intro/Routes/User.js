const express = require('express');
const Router = express.Router();
const users = require('../Controllers/user.js');

Router.post('/', users.registerUser);

module.exports = Router;