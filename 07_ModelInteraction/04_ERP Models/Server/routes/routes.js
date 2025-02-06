const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Auth");

router.post('/otp', controllers.otpSend);
router.post("/signup", controllers.signup);

// router.post("/login", controllers.login);
// router.post("/forgot-password", controllers.forgotPassword);
// router.post("/reset-password", controllers.resetPassword);
// router.post("/logout", controllers.logout);

module.exports = router;
