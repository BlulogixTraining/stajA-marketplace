const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductDetailsSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  value: {
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
