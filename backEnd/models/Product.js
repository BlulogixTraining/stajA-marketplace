const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
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
  discount: {
    type: Number,
    default: 10,
  },
  image: [
    {
      type: String,
    },
  ],
  stock: {
    type: Number,
    default: 0,
  },
  variants: [
    {
      category_id: {
        type: Schema.Types.ObjectId,
        ref: "Variant",
      },
      values: [String],
    },
  ],
  slug: {
    type: String,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
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
