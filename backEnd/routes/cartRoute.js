const express = require("express");
const cartController = require("../controllers/api/v1/cartController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/add").post(verifyToken, cartController.addToCart);
router.route("/get").get(verifyToken,cartController.getAllProductsExistsInCart);

module.exports = router;
