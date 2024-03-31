const express = require("express");
const productController = require("../controllers/api/v1/productController");
const router = express.Router();

router.route("/").get(productController.getAllProducts);
router.route("/").post(productController.createProduct);

module.exports = router;
