const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

  
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

