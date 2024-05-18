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

exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    (product.category_id = req.body.category_id),
      (product.name = req.body.name),
      (product.description = req.body.description),
      (product.price = req.body.price),
      (product.discount = req.body.discount),
      (product.image = req.body.image),
      (product.stock = req.body.stock),
      res.status(200).json({
        status: "Success",
        product,
      });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
