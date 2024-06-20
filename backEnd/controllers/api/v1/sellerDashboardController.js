const Product = require("../../../models/Product");
const User = require("../../../models/User");

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

    const productsOfSeller = await Product.find({ seller: seller._id });

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
      productsOfSeller,
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
