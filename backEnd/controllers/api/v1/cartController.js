const User = require("../../../models/User");
const Product = require("../../../models/Product");
const Cart = require("../../../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res
        .status(404)
        .json({ status: "Fail", message: "User not found" });
    }

    let cart = await Cart.findOne({ user_id: user._id });

    if (!cart) {
      cart = new Cart({ user_id: user._id, products: [] });
    }

    const product = await Product.findById(req.body.product_id);

    if (!product) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Product not found" });
    }

    if (cart.products.includes(product._id)) {
      return res
        .status(400)
        .json({ status: "Fail", message: "Product already in cart" });
    }

    cart.products.push(product._id);
    await cart.save();

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
    const cart = await Cart.findOne({ user_id: user._id });
    const product = await Product.findById(req.body.product_id);

    if (!product) {
      return res
        .status(404)
        .json({ status: "Fail", message: "Product not found" });
    }

    await cart.products.pull(product._id);
    await cart.save();

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
    const user = await User.findById(req.userId);

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }
    const carts = await Cart.find({ user_id: user._id })
      .populate("products")
      .select("products");

    let totalItemsInCart = 0;
    carts.forEach((cart) => {
      totalItemsInCart += cart.products.length;
    });
    res.status(200).json({
      status: "Success",
      carts,
      totalItemsInCart,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};
