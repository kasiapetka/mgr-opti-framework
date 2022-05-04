const Newsletter = require("../models/Newsletter");

exports.postUser = async (req, res) => {
  const user = new Newsletter(req.body.email);
  try {
    await user.save();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "This email is registered in our newsletter base." });
  }

  res
    .status(200)
    .json({ message: "Thanks for registering to our newsletter!" });
};
