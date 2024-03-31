const Category = require("../../../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      status: "Categoty has been created successfuly!",
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(201).json({
      status: "Success",
      categories,
     
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
