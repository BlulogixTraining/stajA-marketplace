const ProductDetails = require("../../../models/ProductDetails");

exports.createDetails = async (req, res) => {
  try {
    const Productdetails = await ProductDetails.create(req.body);

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
