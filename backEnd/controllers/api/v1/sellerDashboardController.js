const Product = require("../../../models/Product");

exports.getDashboard = async (req, res) => {
  try {
    const products = await Product.find({
      user_id: req.userId,
    }).populate("category_id", "name");

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


