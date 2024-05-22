const Category = require("../../../models/Category");
const VariantCategory = require("../../../models/VariantCategory");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      status: "Categoty has been created successfuly!",
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      status: "Success",
      categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
exports.editCategory = async (req, res) => {
  try {
    const categories = await Category.findOne({ _id: req.params.id });
    categories.name = req.body.name;
    categories.save();

    res.status(200).json({
      status: "Success",
      categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const categories = await Category.deleteOne({ _id: req.params.id });

    res.status(200).json({
      status: "Success",
      categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.createVariantCategory = async (req, res) => {
  try {
    const variantcategory = await VariantCategory.create(req.body);

    res.status(201).json({
      status: "Categoty has been created successfuly!",
      variantcategory,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
exports.getAllVariantCategory = async (req, res) => {
  try {
    const variantcategories = await VariantCategory.find();

    res.status(200).json({
      status: "Success",
      variantcategories,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
