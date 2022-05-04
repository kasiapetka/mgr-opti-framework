const Section = require("../models/Section");

exports.getSections = async (req, res) => {
  let sections;

  try {
    sections = await Section.find();
  } catch (err) {
    return res.status(500).send(err);
  }

  res.send(sections);
};
