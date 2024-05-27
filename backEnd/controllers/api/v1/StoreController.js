const fs = require("fs");
const path = require("path");
const Store = require("../../../models/Store");

exports.createStore = async (req, res) => {
  const uploadDir = path.join(__dirname, "../../../public/images/");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  let sampleFile = req.files.image;
  let uploadPath = path.join(uploadDir, sampleFile.name);

  sampleFile.mv(uploadPath, async (err) => {
    if (err) {
      return res.status(500).json({
        status: "fail",
        error: err.message,
      });
    }

    try {
      const store = await Store.create({
        ...req.body,
        seller_id: req.userId,
        image: "/images/" + sampleFile.name,
      });
      res.status(201).json({
        status: "Store has been created successfuly!",
        store,
      });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        error,
      });
    }
  });
};

exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.find();

    res.status(200).json({
      status: "Success",
      stores,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.editStore = async (req, res) => {
  try {
    const stores = await Store.findOne({ _id: req.params.id });

    stores.branchName = req.body.branchName;
    stores.description = req.body.description;
    stores.image = req.body.image;
    stores.email = req.body.email;
    stores.contact = req.body.contact;
    stores.city = req.body.city;
    stores.save();

    res.status(200).json({
      status: "Success",
      stores,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    const stores = await Store.deleteOne({ _id: req.params.id });

    res.status(200).json({
      status: "Success",
      stores,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error,
    });
  }
};
