const User = require("../../../models/User");
const Product = require("../../../models/Product");
const ProductReview = require("../../../models/ProductReview");

exports.addToFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res
        .status(404)
        .json({ status: "Fail", message: "User not found" });
    }

    const product = await Product.findById(req.body.product_id);

    if (!product) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Product not found" });
    }

    if (user.favorite.includes(product._id)) {
      return res
        .status(400)
        .json({ status: "Fail", message: "Product already in favorite" });
    }

    await user.favorite.push(product._id);
    await user.save();

    res.status(201).json({
      status: "Success",
      message: "The product has been added to the favorite successfully!",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "An error occurred while adding the product to the favorite",
      error: error.message,
    });
  }
};
exports.removeFromFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res
        .status(404)
        .json({ status: "Fail", message: "User not found" });
    }

    const product = await Product.findById(req.body.product_id);

    if (!product) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Product not found" });
    }

    await user.favorite.pull(product._id);
    await user.save();

    res.status(201).json({
      status: "Success",
      message: "The product has been removed from the favorite successfully!",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "An error occurred while removing the product from the favorite",
      error: error.message,
    });
  }
};

exports.getAllProductsExistsInFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("favorite");

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    const productsInFavorite = user.favorite;

    const favoriteProductIds = productsInFavorite.map((product) => product._id);

    const averageRatings = await ProductReview.aggregate([
      { $match: { product_id: { $in: favoriteProductIds } } },
      {
        $group: {
          _id: "$product_id",
          averagerating: { $avg: "$rating" },
        },
      },
    ]);

    const favoriteProductsWithRatings = productsInFavorite.map((product) => {
      const rating = averageRatings.find((r) => r._id.equals(product._id));
      const discount = product.discount || 0;
      const discountedPrice = product.price - discount;
      return {
        ...product.toObject(),
        averagerating: rating ? rating.averagerating : null,
        discountedPrice,
      };
    });

    res.status(200).json({
      status: "Success",
      favorite: favoriteProductsWithRatings,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};
