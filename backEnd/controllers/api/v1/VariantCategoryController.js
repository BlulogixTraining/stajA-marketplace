const VariantCategory = require("../../../models/VariantCategory");

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
