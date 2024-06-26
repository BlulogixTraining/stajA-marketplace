const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  seller: {
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variant",
        required: true,
      },
      values: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],

  details: [
    {
      key: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductDetails",
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
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
