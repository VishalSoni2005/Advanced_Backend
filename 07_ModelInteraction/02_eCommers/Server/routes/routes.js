const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Auth");

router.post('/signup', controllers.signup)

module.exports = router;
