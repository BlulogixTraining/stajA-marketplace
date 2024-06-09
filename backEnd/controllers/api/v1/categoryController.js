const Category = require("../../../models/Category");
const Variant = require("../../../models/Variant");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      ...req.body,
      user_id: req.userId,
    });

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
    const categories = await Category.find({
      user_id: req.userId,
    });

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

exports.createVariant = async (req, res) => {
  try {
    const variant = await Variant.create(req.body);

    res.status(201).json({
      status: "Categoty has been created successfuly!",
      variant,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
exports.getAllVariants = async (req, res) => {
  try {
    const variants = await Variant.find();

    res.status(200).json({
      status: "Success",
      variants,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
