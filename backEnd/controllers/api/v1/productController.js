const fs = require("fs");
const path = require("path");
const Product = require("../../../models/Product");
const Category = require("../../../models/Category");
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
    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};
    
    if (categorySlug) {
      filter = { category_id: category._id };
    }

    const products = await Product.find(filter);

    res.status(200).json({
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


exports.getProductDetails = async (req, res) => {
  try {
    

    const product = await Product.findOne({slug: req.params.slug});

    res.status(200).json({
      status: "Success",
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};