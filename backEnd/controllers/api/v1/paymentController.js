const Payment = require("../../../models/Payment");
//const User = require("../../../models/User");

exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create({
      ...req.body,
      user_id: req.userId,
    });
    /*
    await User.findByIdAndUpdate(req.userId, {
      $push: { addresses: address._id },
    });
*/
    res.status(201).json({
      status: "Success",
      payment,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({
      user_id: req.userId,
    });

    res.status(201).json({
      status: "Success",
      payments,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.editpayment = async (req, res) => {
  try {
    const payment = await Payment.findOne({ _id: req.params.id });

    (payment.cardNumber = req.body.cardNumber),
      (payment.NameOnCard = req.body.NameOnCard),
      (payment.CardValidationDate = req.body.CardValidationDate),
      res.status(201).json({
        status: "Success",
        payment,
      });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.deleteOne({ _id: req.params.id });

    res.status(201).json({
      status: "Success",
      payment,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
