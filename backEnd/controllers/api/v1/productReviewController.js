const ProductReview = require("../../../models/ProductReview");
const Product = require("../../../models/Product");
const User = require("../../../models/User");

exports.createReview = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    const review = await ProductReview.create({
      review: req.body.review,
      rating: req.body.rating,
      product_id: product._id,
      user_id: req.userId,
    });

    res.status(201).json({
      status: "The review has been created successfuly!",
      review,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await ProductReview.find().populate("user_id", "name");

    res.status(200).json({
      status: "Success",
      reviews,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
