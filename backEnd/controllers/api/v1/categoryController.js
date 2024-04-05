const fs = require("fs");
const Category = require("../../../models/Category");

exports.createCategory = async (req, res) => {
  const uploadDir = __dirname + "/public/images/";

  // Check if directory exists, if not, create it
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Move the file to the upload path
  const sampleFile = req.files.image;
  const uploadPath = uploadDir + sampleFile.name;

  sampleFile.mv(uploadPath, async (err) => {
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
