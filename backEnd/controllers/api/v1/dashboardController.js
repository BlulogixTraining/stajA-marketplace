const User = require("../../../models/User");
const Address = require("../../../models/Address");

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.userId }).populate("addresses");

    res.status(200).json({
      status: "Success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.createAddress = async (req, res) => {
  try {
    const address = await Address.create({
      ...req.body,
      user_id: req.userId,
    });
    await User.findByIdAndUpdate(req.userId, {
      $push: { addresses: address._id },
    });

    res.status(201).json({
      status: "Success",
      address,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
