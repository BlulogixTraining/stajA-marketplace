const fs = require("fs");
const faker = require("faker");
const mongoose = require("mongoose");
const path = require("path");
const Product = require("../../../models/Product");
const Category = require("../../../models/Category");
const ProductReview = require("../../../models/ProductReview");
const ProductVariant = require("../../../models/ProductVariant");
const VariantCategory = require("../../../models/VariantCategory");

exports.createProduct = async (req, res) => {
  const uploadDir = path.join(__dirname, "../../../public/images/");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const files = req.files.images;

  try {
    const imagePaths = [];

    for (const file of files) {
      const uploadPath = path.join(uploadDir, file.name);

      await file.mv(uploadPath);

      imagePaths.push("/images/" + file.name);
    }

    const product = await Product.create({
      ...req.body,
      image: imagePaths,
    });

    res.status(201).json({
      status: "Product has been created successfully!",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const page = req.query.page || 1;

    const productPerPage = 6;
    const totalproducts = await Product.find().countDocuments();

    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category_id: category._id };
    }

    const products = await Product.find(filter)
      .sort("createdAt")
      .skip((page - 1) * productPerPage)
      .limit(productPerPage);

    res.status(200).json({
      status: "Success",
      products: products,
      current: page,
      pages: Math.ceil(totalproducts / productPerPage),
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.getProductDetails = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    const reviews = await ProductReview.find({ product_id: product._id }).populate("user_id", "name");
    const productVariants = await ProductVariant.find({ product_id: product._id }).populate("category_id");

    let totalRating = 0;

    reviews.forEach((review) => {
      totalRating += review.rating;
    });

    const averageRating = reviews.length > 0 ? Math.round(totalRating / reviews.length) : 0;

    const variants_available = {};

    productVariants.forEach((variant) => {
      const categoryName = variant.category_id.name;
      variants_available[categoryName] = variants_available[categoryName] || [];
      variants_available[categoryName] = variants_available[categoryName].concat(variant.variantvalues);
    });

    res.status(200).json({
      status: "Success",
      product,
      averageRating,
      reviews,
      variants_available,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};


/*

// Function to generate fake products
const generateFakeProducts = (count) => {
  const categoryIds = [
    "662e444e881229801e3448b0",
    "662e445c881229801e3448b2",
    "662e4465881229801e3448b4",
    "662e447b881229801e3448b6",
    "662e449f881229801e3448b8"
  ];

  let fakeProducts = [];
  for (let i = 0; i < count; i++) {
    const randomCategoryIdIndex = faker.datatype.number({ min: 0, max: categoryIds.length - 1 });

    // Generate image URLs
    const imageUrls = [];
    for (let j = 1; j <= 3; j++) {
      const imageUrl = `/images/image (${faker.datatype.number({ min: 1, max: 45 })}).jpg`;
      imageUrls.push(imageUrl);
    }

    const fakeProduct = {
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: faker.commerce.price(),
      discount: faker.datatype.number(), // Adjust the discount range as needed
      image: imageUrls, // Assign array of image URLs
      stock: faker.datatype.number(), // Adjust the stock range as needed
      category_id: categoryIds[randomCategoryIdIndex], // Assign a random category ID
    };
    fakeProducts.push(fakeProduct);
  }
  return fakeProducts;
};




// Generate and save fake products
const saveFakeProducts = async (count) => {
  try {
    const fakeProducts = generateFakeProducts(count);
    const savedProducts = await Product.create(fakeProducts);
    console.log(`${savedProducts.length} fake products created successfully.`);
  } catch (error) {
    console.error('Error generating fake products:', error);
  }
};

// Specify the number of fake products you want to generate
const numberOfFakeProducts = 15; // Change this number as needed

// Call the function to generate and save fake products
saveFakeProducts(numberOfFakeProducts);


*/
