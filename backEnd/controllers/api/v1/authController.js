const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const User = require("../../../models/User");


exports.createUser = async (req, res) => {
  const uploadDir = path.join(__dirname, "../../../public/images/");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  let sampleFile = req.files.image;
  let uploadPath = path.join(uploadDir, sampleFile.name);

  sampleFile.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        error: err.message,
      });
    }

    try {
      const user = await User.create({
        ...req.body,
        image: "/images/" + sampleFile.name,
      });
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.status(201).json({
        status: "Category has been created successfully!",
        user,
        token,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error,
      });
    }
  });
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const same = await bcrypt.compare(password, user.password);
      if (same) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        req.session.userID = user._id;

        res.status(200).json({
          status: "success",
          message: "You are logged in!",
          user,
          token,
        });
      } else {
        res.status(401).json({
          status: "fail",
          message: "Incorrect email or password.",
        });
      }
    } else {
      res.status(404).json({
        status: "fail",
        message: "User not found.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      users,
    });
    console.log(req.session.userID);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "User has been deleted!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.json({
      status: "You are logged out!",
    });
  });
};
