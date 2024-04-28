const ProductReview = require("../../../models/ProductReview");

exports.createReview = async (req, res) => {
  try {
    const review = await ProductReview.create({
      ...req.body,
      user_id: req.session.userID,
    });

    res.status(201).json({
      status: "The review has been created successfuly!",
      review,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await ProductReview.find();

    res.status(200).json({
      status: "Success",
      reviews,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
