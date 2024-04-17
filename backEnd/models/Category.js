const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
  },
});

CategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
