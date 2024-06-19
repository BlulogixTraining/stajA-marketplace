const fs = require("fs");
const faker = require("faker");
const mongoose = require("mongoose");
const path = require("path");
const Product = require("../../../models/Product");
const Category = require("../../../models/Category");
const ProductReview = require("../../../models/ProductReview");
const ProductDetails = require("../../../models/ProductDetails");
const Variant = require("../../../models/Variant");

exports.createProduct = async (req, res) => {
  const uploadDir = path.join(__dirname, "../../../public/images/");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  try {
    const imagePaths = [];

    if (req.files && req.files.images) {
      const files = Array.isArray(req.files.images)
        ? req.files.images
        : [req.files.images];

      for (const file of files) {
        const uploadPath = path.join(uploadDir, file.name);
        await file.mv(uploadPath);
        imagePaths.push("/images/" + file.name);
      }
    }

    // Parse the variants field if it is a string
    let variants = req.body.variants;
    if (typeof variants === "string") {
      variants = JSON.parse(variants);
    }

    const productData = {
      ...req.body,
      image: imagePaths.length ? imagePaths : undefined,
      seller: req.userId,
      variants,
    };
    //console.log("Product Data:", productData);

    // Handling variants
    if (variants && Array.isArray(variants)) {
      const variantsData = [];

      for (const variant of variants) {
        const variantRecord = await Variant.findById(variant.category_id);
        if (!variantRecord) {
          return res.status(400).json({
            status: "Fail",
            message: `Variant with ID ${variant.category_id} does not exist.`,
          });
        }
        const invalidValues = variant.values.filter(
          (value) => !variantRecord.values.includes(value)
        );
        if (invalidValues.length > 0) {
          return res.status(400).json({
            status: "Fail",
            message: `Values ${invalidValues.join(
              ", "
            )} do not exist in variant ${variantRecord.category}.`,
          });
        }
        variantsData.push({
          category_id: variant.category_id,
          values: variant.values,
        });
      }

      productData.variants = variantsData;
    }

    const product = await Product.create(productData);

    res.status(201).json({
      status: "Product has been created successfully!",
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error);
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
    const variantValues = req.query.variants
      ? req.query.variants.split(",")
      : [];

    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category_id: category._id };
    }

    if (variantValues.length > 0) {
      filter["variants.values"] = { $all: variantValues };
    }

    const products = await Product.aggregate([
      { $match: filter },
      {
        $lookup: {
          from: "productreviews",
          localField: "_id",
          foreignField: "product_id",
          as: "reviews",
        },
      },
      {
        $addFields: {
          averagerating: { $ceil: { $avg: "$reviews.rating" } },
        },
      },
      // To obscure the array of reviews
      {
        $project: {
          reviews: 0,
        },
      },

      {
        $skip: (page - 1) * productPerPage,
      },
      {
        $limit: productPerPage,
      },
    ]);

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
    const product = await Product.findOne({ slug: req.params.slug })
      .populate({
        path: "variants.category_id",
        select: "category",
      })
      .populate("seller", "name");
    const reviews = await ProductReview.find({
      product_id: product._id,
    }).populate("user_id", "name");

    let totalRating = 0;
    reviews.forEach((review) => {
      totalRating += review.rating;
    });

    const averagerating =
      reviews.length > 0 ? Math.round(totalRating / reviews.length) : 0;

    const Productdetails = await ProductDetails.find({
      product_id: product._id,
    });

    res.status(200).json({
      status: "Success",
      product,
      averagerating,
      reviews,
      Productdetails,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    (product.category_id = req.body.category_id),
      (product.name = req.body.name),
      (product.description = req.body.description),
      (product.price = req.body.price),
      (product.discount = req.body.discount),
      (product.image = req.body.image),
      (product.stock = req.body.stock),
      await product.save();
    res.status(200).json({
      status: "Success",
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });

    res.status(200).json({
      status: "Success",
      product,
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
