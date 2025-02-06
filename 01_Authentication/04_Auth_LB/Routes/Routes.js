const express = require("express");
const router = express.Router();
const { login, signup } = require("../Controllers/Controller");
const { auth, isStudent, isAdmin } = require('../Middlewares/Auth.js')

router.post("/signup", signup);
router.post("/login", login);

// testing routes
router.get("/auth", auth, (req, res) => {
  // fist auth then protected
  res.json({
    success: true,
    message: "Welcom to test route (*.*)",
    user: req.user,
  });
});

// protected routes

router.get("/student", auth, isStudent, (req, res) => {
  // fist auth then isStudent
  res.json({
    success: true,
    message: "You are authenticated to join as a student",
    user: req.user,
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  // fist auth then isAdmin
  res.json({
    success: true,
    message: "You are authenticated to join as an admin",
    user: req.user,
  });
});

module.exports = router;
