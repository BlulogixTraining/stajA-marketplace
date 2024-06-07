const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const VariantSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  values: [{ type: String }],

  slug: {
    type: String,
    unique: true,
  },
});

VariantSchema.pre("validate", function (next) {
  this.slug = slugify(this.category, {
    lower: true,
    strict: true,
  });
  next();
});

const Variant = mongoose.model("Variant", VariantSchema);

module.exports = Variant;
