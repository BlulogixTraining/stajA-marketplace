const fs = require("fs");
const path = require("path");
const Product = require("../../../models/Product");
exports.createProduct = async (req, res) => {
  const uploadDir = path.join(__dirname, "../../../public/images/");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const sampleFile = req.files.image;
  const uploadPath = path.join(uploadDir, sampleFile.name);

  sampleFile.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        error: err.message,
      });
    }

    try {
      const product = await Product.create({
        ...req.body,
        image: "/images/" + sampleFile.name,
      });

      res.status(201).json({
        status: "Product has been created successfully!",
        product,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error,
      });
    }
  });
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(201).json({
      status: "Success",
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
