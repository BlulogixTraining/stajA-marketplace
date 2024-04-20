const fs = require("fs");
const path = require('path');
const Category = require("../../../models/Category");

exports.createCategory = async (req, res) => {
  const uploadDir = path.join(__dirname, "../../../public/images/");

  
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  let sampleFile = req.files.image;
  let uploadPath = path.join(uploadDir, sampleFile.name);

  sampleFile.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        error: err.message
      });
    }

    try {
      const category = await Category.create({
        ...req.body,
        image: "/images/" + sampleFile.name,
      });

      res.status(201).json({
        status: "Category has been created successfully!",
        category,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error,
      });
    }
  });
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
      status: "fail",
      error,
    });
  }
};
