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
        status: "Fail",
        error: err.message,
      });
    }

    try {
      const user = await User.create({
        ...req.body,
        image: "/images/" + sampleFile.name,
      });
      const token = createToken(user._id);
      res.status(201).json({
        status: "User has been created successfully!",
        user,
        token: token,
      });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        error,
      });
    }
  });
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    let same = false;

    if (user) {
      same = await bcrypt.compare(password, user.password);
    } else {
      return res.status(401).json({
        succeded: false,
        error: "Incorrect email or password",
      });
    }

    if (same) {
      const token = createToken(user._id);
      

      res.status(200).json({
        status: "Success",
        message: "You are logged in!",
        user,
        token: token,
      });
    } else {
      res.status(401).json({
        succeded: false,
        error: "Incorrect email or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "Success",
      users,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
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
      status: "Fail",
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

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
