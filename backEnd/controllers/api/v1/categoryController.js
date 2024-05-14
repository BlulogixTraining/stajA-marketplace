const Category = require("../../../models/Category");
const VariantCategory = require("../../../models/VariantCategory");



/*
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
        //image: "/images/" + sampleFile.name,
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
*/
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
};exports.createVariantCategory = async (req, res) => {
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