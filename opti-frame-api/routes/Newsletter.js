const express = require("express");

const newsletterController = require("../controllers/NewsletterController");

const router = express.Router();

router.post("/newsletter", newsletterController.postUser);

module.exports = router;
