const Property = require("../../../models/Property");

exports.createProprties = async (req, res) => {
  try {
    const proprties = await Property.create(req.body);

    res.status(201).json({
      status: "proprties has been created successfuly!",
      proprties,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.getProprties = async (req, res) => {
  try {
    const proprties = await Property.find();

    res.status(200).json({
      status: "Success",
      proprties,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
