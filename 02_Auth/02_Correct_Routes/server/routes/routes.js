const express = require("express");
const router = express.Router();
const { auth, isStudent, isAdmin } = require("../middleware/auth.js");
const { register, login, logout } = require("../controller/controller.js");

// post routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// test route for auth
router.get("/test", auth, (req, res) => {
  return res.json({
    msg: "welcome to test route (*_*) ",
    user: req.user,
  });
});

// routes for roles
router.get("/auth/student", auth, isStudent, (req, res) => {
  return res.json({
    msg: "You are authenticated and proved as a student now You can access student dashboard ",
    user: req.user,
  });
});

router.get("/auth/admin", auth, isAdmin, (req, res) => {
  return res.json({
    msg: "You are authenticated and proved as an admin now You can access admin dashboard ",
    user: req.user,
  });
});

module.exports = router;
