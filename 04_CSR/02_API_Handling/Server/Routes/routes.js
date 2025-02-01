const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../Controllers/controller");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/test", (req, res) => {
  res.json({
    message: "Hello, world!",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
