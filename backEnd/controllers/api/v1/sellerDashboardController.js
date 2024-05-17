const User = require("../../../models/User");
const Product = require("../../../models/Product");

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.userId });
    const products = await Product.find({
      user_id: req.userId,
    });

    res.status(200).json({
      status: "Success",
      products,
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
