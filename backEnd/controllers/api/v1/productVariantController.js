const ProductVariant = require("../../../models/ProductVariant");

exports.createProductVariant = async (req, res) => {
  try {
    const productvariant = await ProductVariant.create(req.body);
    /*
    if (product.product_variant.includes(product._id)) {
      return res
        .status(400)
        .json({ status: "Fail", message: "product variant already exists!" });
    }
    await product.product_variant.push(productvariant._id);
    await product.save();
*/
    res.status(201).json({
      status: "proprties has been created successfuly!",
      productvariant,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.getProductVariant = async (req, res) => {
  try {
    const productvariant = await ProductVariant.find();

    res.status(200).json({
      status: "Success",
      productvariant,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
