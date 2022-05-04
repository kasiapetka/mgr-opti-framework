const mongoose = require("mongoose");

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: [255, "Too long, 255 characters only."],
  },
});

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);
module.exports = Newsletter;
