const Product = require("../../../models/Product");
const User = require("../../../models/User");
const ProductReview = require("../../../models/ProductReview");

exports.getProductsRelatedToSeller = async (req, res) => {
  try {
    const products = await Product.find({
      seller: req.userId,
    }).populate("category_id", "name");

    res.status(200).json({
      status: "Success",
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.getSellerDetails = async (req, res) => {
  try {
    const seller = await User.findOne({ sellerSlug: req.params.slug });

    if (!seller) {
      return res.status(404).json({
        status: "Fail",
        message: "Seller not found",
      });
    }

    const productsOfSeller = await Product.find({ seller: seller._id });

    const productIds = productsOfSeller.map((product) => product._id);

    const reviews = await ProductReview.find({
      product_id: { $in: productIds },
    }).populate("user_id", "name");

    const productRatings = {};
    reviews.forEach((review) => {
      if (!productRatings[review.product_id]) {
        productRatings[review.product_id] = { totalRating: 0, count: 0 };
      }
      productRatings[review.product_id].totalRating += review.rating;
      productRatings[review.product_id].count += 1;
    });

    const averageRatings = {};
    for (const productId in productRatings) {
      const { totalRating, count } = productRatings[productId];
      averageRatings[productId] = Math.round(totalRating / count);
    }

    const productsWithRatings = productsOfSeller.map((product) => {
      const avgRating = averageRatings[product._id] || 0;
      return {
        ...product.toObject(),
        averageRating: avgRating,
      };
    });

    const sanitizedSeller = {
      _id: seller._id,
      name: seller.name,
      lastname: seller.lastname,
      email: seller.email,
      image: seller.image,
      role: seller.role,
      sellerSlug: seller.sellerSlug,
    };

    res.status(200).json({
      status: "Success",
      seller: sanitizedSeller,
      productsOfSeller: productsWithRatings,
      reviews: reviews,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.getAllSellers = async (req, res) => {
  try {
    const sellers = await User.find({ role: "seller" });

    const sanitizedSellers = sellers.map((seller) => ({
      _id: seller._id,
      name: seller.name,
      lastname: seller.lastname,
      email: seller.email,
      image: seller.image,
      storeImage: seller.storeImage,
      role: seller.role,
      sellerSlug: seller.sellerSlug,
    }));

    res.status(200).json({
      status: "Success",
      sellers: sanitizedSellers,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
