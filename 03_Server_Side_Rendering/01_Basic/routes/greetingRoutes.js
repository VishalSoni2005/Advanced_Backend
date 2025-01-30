const express = require("express");
const router = express.Router();
const greetingController = require("../controllers/greetingController");

// Define routes
router.get("/morning", greetingController.morning);
router.get("/evening", greetingController.evening);
router.get("/night", greetingController.night);
router.get("/", greetingController.makeEntry);
router.post("/", greetingController.entry);

module.exports = router;
