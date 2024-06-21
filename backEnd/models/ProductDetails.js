const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductDetailsSchema = new Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  key: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductDetails = mongoose.model("ProductDetails", ProductDetailsSchema);
module.exports = ProductDetails;
