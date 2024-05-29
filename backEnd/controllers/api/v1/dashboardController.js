const User = require("../../../models/User");

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.userId }).populate("addresses");

    res.status(200).json({
      status: "Success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
