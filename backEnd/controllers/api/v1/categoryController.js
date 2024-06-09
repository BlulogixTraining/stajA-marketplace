const Category = require("../../../models/Category");
const Variant = require("../../../models/Variant");
const User = require("../../../models/User");

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
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    }

    if (user._id.toString() === category.user_id.toString()) {
      category.name = req.body.name;
      await category.save();

      res.status(200).json({
        status: "Success",
        category,
      });
    } else {
      res.status(403).json({
        status: "fail",
        message: "Unauthorized action",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    }

    if (user._id.toString() === category.user_id.toString()) {
      await Category.deleteOne({ _id: req.params.id });
      res.status(200).json({
        status: "Success",
        message: "Category deleted",
      });
    } else {
      res.status(403).json({
        status: "fail",
        message: "Unauthorized action",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
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
