const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const VariantSchema = new Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  category: {
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

VariantSchema.pre("validate", function (next) {
  this.slug = slugify(this.category, {
    lower: true,
    strict: true,
  });
  next();
});

const Variant = mongoose.model("Variant", VariantSchema);

module.exports = Variant;
