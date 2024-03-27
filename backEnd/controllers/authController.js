const bcrypt = require("bcrypt");
const User = require("../models/User");



exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const same = await bcrypt.compare(password, user.password);
      if (same) {
        //User session
        req.session.userID = user._id;
        res.status(200).redirect("/users/dashboard");
      } else {
        // If the password is not correct
        req.flash("error", "Your Password Is Not Correct");
        res.status(400).redirect("/login");
      }
    } else {
      // If the user is not found
      req.flash("error", "User not found. Please register.");
      res.status(400).redirect("/login");
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
