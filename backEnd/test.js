/*
exports.getProductDetails = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
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
    const variants_available = await ProductVariant.find({
      product_id: product._id,
    }).populate("category_id", "name values");

    res.status(200).json({
      status: "Success",
      product,
      averagerating,
      reviews,
      Productdetails,
      variants_available,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
*/

/*
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
      user_id: req.userId,
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
*/


/*
    const variantCategories = await VariantCategory.find();
    const productVariants = await ProductVariant.find({
      product_id: product._id,
    });

    const variants_available = {};

    variantCategories.forEach((category) => {
      variants_available[category.name] = [];

      productVariants.forEach((variant) => {
        if (String(variant.category_id) === String(category._id)) {
          variants_available[category.name] = variants_available[
            category.name
          ].concat(variant.variantvalues);
        }
      });
    });
    */