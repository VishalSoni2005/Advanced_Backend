const express = require("express");
const router = express.Router();
const { auth, isStudent, isAdmin } = require("../middleware/auth.js");
const { register, login } = require("../controller/controller.js");

// post routes
router.post("/signup", register);
router.post("/login", login);

router.get("/", auth, (req, res) => {
  return res.json({
    msg: "welcome to test route (*_*) ",
    user: req.user,
  });
});

module.exports = router;
