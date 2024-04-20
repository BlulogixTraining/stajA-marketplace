const User = require("../../../models/User");
const Address = require("../../../models/Address");

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.session.userID }).populate(
      "addresses"
    );
    

    res.status(200).json({
      status: "success",
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
      user_id: req.session.userID,
    });
    await User.findByIdAndUpdate(req.session.userID, {
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
