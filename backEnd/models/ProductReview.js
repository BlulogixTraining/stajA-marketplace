const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductReviewSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductReview = mongoose.model("ProductReview", ProductReviewSchema);
module.exports = ProductReview;
