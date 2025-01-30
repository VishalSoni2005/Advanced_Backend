const express = require("express");
const router = express.Router();
const urlContorllers = require("../Controllers/urlController.js");

router.get("/", urlContorllers.getHome);
router.post("/shorten", urlContorllers.createShortUrl);
router.get("/:shortUrl", urlContorllers.redirectToFullUrl);

module.exports = router;
