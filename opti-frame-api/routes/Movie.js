const express = require("express");

const movieController = require("../controllers/MovieController");

const router = express.Router();

router.get("/genres", movieController.getGenres);
router.get("/movies", movieController.getMovies);
router.get("/movies/:id", movieController.getMovie);

module.exports = router;
