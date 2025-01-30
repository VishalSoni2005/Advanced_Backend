const express = require("express");
const router = express.Router();
const urlContorllers = require("../Controllers/urlController.js");
const authMiddleware = require("../Middleware/authMiddleware.js");

router.get("/", urlContorllers.getHome);
router.post("/shorten",authMiddleware, urlContorllers.createShortUrl);
router.get("/:shortUrl", urlContorllers.redirectToFullUrl);

module.exports = router;
