const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const User = require("../../../models/User");

exports.createUser = async (req, res) => {
  const uploadDir = path.join(__dirname, "../../../public/images/");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  let userData = { ...req.body };

  if (req.files && req.files.image) {
    let sampleFile = req.files.image;
    let uniqueFilename = uuidv4() + path.extname(sampleFile.name);
    let uploadPath = path.join(uploadDir, uniqueFilename);

    sampleFile.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).json({
          status: "Fail",
          error: err.message,
        });
      }
      userData.image = "/images/" + uniqueFilename;
    });
  } else {
    userData.image = "";
  }

  if (req.files && req.files.storeImage) {
    let storeImageFile = req.files.storeImage;
    let uniqueStoreImageFilename = uuidv4() + path.extname(storeImageFile.name);
    let storeImagePath = path.join(uploadDir, uniqueStoreImageFilename);

    storeImageFile.mv(storeImagePath, (err) => {
      if (err) {
        return res.status(500).json({
          status: "Fail",
          error: err.message,
        });
      }
      userData.storeImage = "/images/" + uniqueStoreImageFilename;
    });
  } else {
    userData.storeImage = "";
  }

  try {
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = await User.create(userData);
    const token = createToken(user._id);

    const sanitizedUser = {
      _id: user._id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      image: user.image,
      storeImage: user.storeImage,
      role: user.role,
      phone: user.phone,
    };

    res.status(201).json({
      status: "User has been created successfully!",
      user: sanitizedUser,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
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

      const sanitizedUser = {
        _id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        role: user.role,
      };

      res.status(200).json({
        status: "Success",
        message: "You are logged in!",
        user: sanitizedUser,
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
