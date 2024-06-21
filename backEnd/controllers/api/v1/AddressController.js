const Address = require("../../../models/Address");
const User = require("../../../models/User");

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

exports.getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({
      user_id: req.userId,
    });

    res.status(201).json({
      status: "Success",
      addresses,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.editAddress = async (req, res) => {
  try {
    const address = await Address.findOne({ _id: req.params.id });

    (address.name = req.body.name),
      (address.addressline1 = req.body.addressline1),
      (address.addressline2 = req.body.addressline2),
      (address.country = req.body.country),
      (address.state = req.body.state),
      (address.zipcode = req.body.zipcode),
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

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({
        status: "Fail",
        message: "Address not found",
      });
    }

    await Address.deleteOne({ _id: req.params.id });

    // Update the user to remove the address reference
    await User.updateOne(
      { _id: address.user_id },
      { $pull: { addresses: req.params.id } }
    );

    res.status(200).json({
      status: "Success",
      message: "Address deleted and removed from user",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};
