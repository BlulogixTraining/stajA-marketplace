const mongoose = require("mongoose");
const slugify = require("slugify");

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

  slug: {
    type: String,
    unique: true,
  },

  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

ProductSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
