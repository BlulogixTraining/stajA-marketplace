const User = require("../../../models/User");
const Address = require("../../../models/Address");

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById({ _id: res.locals.user._id });
    

    res.status(200).json({
      status: "Success",
      user,
      
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.createAddress = async (req, res) => {
  try {
    const address = await Address.create({
      ...req.body,
      user_id: res.locals.user._id,
    });
    await User.findByIdAndUpdate(res.locals.user._id, {
      $push: { addresses: address._id },
    });

    res.status(201).json({
      status: "success",
      address,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
