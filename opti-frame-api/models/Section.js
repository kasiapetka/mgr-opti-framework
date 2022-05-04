const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    maxLength: [255, "Too long, 255 characters only."],
  },
  title: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  assets: {
    type: Array,
    required: false,
  },
  movies: {
    type: Array,
    required: false,
  },
});

const Section = mongoose.model("Section", SectionSchema);
module.exports = Section;
