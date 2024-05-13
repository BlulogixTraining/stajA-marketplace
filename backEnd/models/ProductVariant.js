const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductVariantSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },

  category_id: {
    type: Schema.Types.ObjectId,
    ref: "VariantCategory",
  },

  variantvalues: {
    type: [String],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductVariant = mongoose.model("ProductVariant", ProductVariantSchema);
module.exports = ProductVariant;
