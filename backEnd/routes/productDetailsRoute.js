const express = require("express");
const productDetailsController = require("../controllers/api/v1/productDetailsController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/").post(verifyToken, productDetailsController.createDetails);
router.route("/").get(productDetailsController.getDetails);

module.exports = router;
