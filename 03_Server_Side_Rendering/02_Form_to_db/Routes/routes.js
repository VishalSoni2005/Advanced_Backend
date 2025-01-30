const express = require("express");
const router = express.Router();
const controller = require("../Controller/controller");

router.get("/home", controller.home);
router.post("/submit", controller.submit);
router.get("/sucess", controller.sucess);

module.exports = router;
