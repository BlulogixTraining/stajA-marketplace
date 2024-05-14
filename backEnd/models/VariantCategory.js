const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const VariantCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  values: [{ type: String }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const VariantCategory = mongoose.model(
  "VariantCategory",
  VariantCategorySchema
);
module.exports = VariantCategory;
