const Product = require("../../../models/Product");

exports.getDashboard = async (req, res) => {
  try {
    const products = await Product.find({
      user_id: req.userId,
    });

    res.status(200).json({
      status: "Success",
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
