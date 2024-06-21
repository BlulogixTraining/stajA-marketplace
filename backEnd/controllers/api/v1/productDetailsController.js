const ProductDetails = require("../../../models/ProductDetails");
const User = require("../../../models/User");

exports.createDetails = async (req, res) => {
  try {
    const Productdetails = await ProductDetails.create({
      ...req.body,
      seller: req.userId,
    });

    res.status(201).json({
      status: "Product details has been created successfuly!",
      Productdetails,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
exports.getDetails = async (req, res) => {
  try {
    const details = await ProductDetails.find();

    res.status(201).json({
      status: "Success",
      details,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.deleteDetails = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const details = await ProductDetails.findById(req.params.id);
    if (!details) {
      return res.status(404).json({
        status: "fail",
        message: "Details not found",
      });
    }

    if (user._id.toString() === details.seller.toString()) {
      await ProductDetails.deleteOne({ _id: req.params.id });
      res.status(200).json({
        status: "Success",
        message: "Details deleted",
      });
    } else {
      res.status(403).json({
        status: "fail",
        message: "Unauthorized action",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
