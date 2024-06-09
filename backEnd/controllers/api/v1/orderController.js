const Order = require("../../../models/Order");
const User = require("../../../models/User");
const Payment = require("../../../models/Payment");
const Address = require("../../../models/Address");

exports.createOrder = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("cart");

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    const cartItems = user.cart;

    if (cartItems.length === 0) {
      return res.status(400).json({ status: "fail", message: "Cart is empty" });
    }

    const payment = await Payment.findOne({ user_id: user._id }).sort({
      createdAt: -1,
    });
    if (!payment) {
      return res
        .status(400)
        .json({ status: "fail", message: "No payment information found" });
    }

    const address = await Address.findOne({ user_id: user._id }).sort({
      createdAt: -1,
    });
    if (!address) {
      return res
        .status(400)
        .json({ status: "fail", message: "No address information found" });
    }
    let subtotal = 0;
    let totalDiscount = 0;

    const orderItems = cartItems.map((item) => {
      const itemTotal = item.price;
      subtotal += item.price;
      totalDiscount += item.discount;
      return {
        product_id: item._id,
        image:item.image,
        price: item.price,
        discount: item.discount,
        total: itemTotal,
      };
    });

    const total = subtotal - totalDiscount;

    const order = new Order({
      user_id: user._id,
      payment_id: payment._id,
      address_id: address._id,
      products: orderItems,
      subtotal: subtotal.toFixed(2),
      totalDiscount: totalDiscount.toFixed(2),
      total: total.toFixed(2),
    });

    await order.save();

    user.cart = [];
    await user.save();

    res.status(201).json({
      status: "Success",
      order,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      error: error.message,
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user_id: req.userId })
      .populate("payment_id address_id")
      .populate("user_id", "name");

    res.status(200).json({
      status: "Success",
      orders,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.deleteOne({ _id: req.params.id });

    res.status(200).json({
      status: "Success",
      order,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
