const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const VariantCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  values: [{ type: String }],
  slug: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

VariantCategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const VariantCategory = mongoose.model(
  "VariantCategory",
  VariantCategorySchema
);
module.exports = VariantCategory;
