const User = require("../../../models/User");
const Product = require("../../../models/Product");

exports.addToCart = async (req, res) => {
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

    if (user.cart.includes(product._id)) {
      return res
        .status(400)
        .json({ status: "Fail", message: "Product already in cart" });
    }

    user.cart.push(product._id);
    await user.save();

    res.status(201).json({
      status: "Success",
      message: "The product has been added to the cart successfully!",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "An error occurred while adding the product to the cart",
      error: error.message,
    });
  }
};

exports.removeFromCart = async (req, res) => {
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

    await user.cart.pull(product._id);
    await user.save();

    res.status(201).json({
      status: "Success",
      message: "The product has been removed from the cart successfully!",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "An error occurred while removing the product from the cart",
      error: error.message,
    });
  }
};

exports.getAllProductsExistsInCart = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("cart");

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    const productsInCart = user.cart;
    const totalItemsInCart = productsInCart.length;

    let subtotal = 0;
    let totalDiscount = 0;

    productsInCart.forEach((product) => {
      subtotal += product.price;
      totalDiscount += product.discount;
    });

    const total = subtotal - totalDiscount;

    res.status(200).json({
      status: "Success",
      totalItems: totalItemsInCart,
      orderSummary: {
        subtotal: subtotal.toFixed(2),
        discount: totalDiscount.toFixed(2),
        total: total.toFixed(2),
      },
      cart: productsInCart,
      
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};
