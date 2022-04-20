const mongoose = require("mongoose");
const genres = require("../Genres")

const MovieSchema = new mongoose.Schema({
  genres: {
    type: [String],
    required: true,
    enum: genres.genres
  },
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
    maxLength: [255, "Too long, 255 characters only."],
  },
  year: {
    type: Number,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
    maxLength: [255, "Too long, 255 characters only."],
  },
  actors: {
    type: String,
    required: false,
  },
  plot: {
    type: String,
    required: false,
  },
  posterUrl: {
    type: String,
    required: false,
  },
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;