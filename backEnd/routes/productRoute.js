const express = require("express");
const productController = require("../controllers/api/v1/productController");
const verifyToken = require("../middleware/api/v1/authMiddleware");
const router = express.Router();

router.route("/").get(verifyToken, productController.getAllProducts);
router.route("/").post(verifyToken, productController.createProduct);

module.exports = router;
