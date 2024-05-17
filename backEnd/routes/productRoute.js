const express = require("express");
const productController = require("../controllers/api/v1/productController");


const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/").get(productController.getAllProducts);
router.route("/:slug").get(productController.getProductDetails);
router.route("/").post(verifyToken, productController.createProduct);




module.exports = router;
