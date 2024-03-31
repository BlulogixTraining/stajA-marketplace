const bcrypt = require("bcrypt");
const User = require("../../../models/User");

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
        res.status(200).json({
          status: "success",
          message: "You are logged in!",
          user,
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

    res.status(201).json({
      status: "success",
      users,
    });
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

    res.status(201).json({
      status: "User has been deleted!",
      
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};