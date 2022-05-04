const express = require("express");

const sectionsController = require("../controllers/SectionsController");

const router = express.Router();

router.get("/sections", sectionsController.getSections);

module.exports = router;
