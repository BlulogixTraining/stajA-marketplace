const Order = require("../../../models/Order");
const User = require("../../../models/User");

exports.createOrder = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("cart");

    if (!user) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }

    const { address, payment } = req.body;

    /*
    if (!address || !payment) {
      return res.status(400).json({ status: "fail", message: "Address and payment details are required" });
    }
*/
    const cartItems = user.cart;

    if (cartItems.length === 0) {
      return res.status(400).json({ status: "fail", message: "Cart is empty" });
    }
    let subtotal = 0;
    let totalDiscount = 0;

    const orderItems = cartItems.map((item) => {
      const itemTotal = item.price;
      subtotal += item.price;
      totalDiscount += item.discount;
      return {
        product_id: item._id,
        price: item.price,
        discount: item.discount,
        total: itemTotal,
        
      };
    });

    const total = subtotal - totalDiscount;

    const order = new Order({
      user_id: user._id,
      products: orderItems,
      subtotal: subtotal.toFixed(2),
      totalDiscount: totalDiscount.toFixed(2),
      total: total.toFixed(2),
      address: {
        name: address.name,
        addressline1: address.addressline1,
        addressline2: address.addressline2,
        country: address.country,
        state: address.state,
        zipcode: address.zipcode,
      },
      payment: {
        cardNumber: payment.cardNumber,
        nameOnCard: payment.nameOnCard,
        cardValidationDate: payment.cardValidationDate,
        ccv: payment.ccv,
      },
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
    const orders = await Order.find({ user_id: req.userId });

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
      order
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
