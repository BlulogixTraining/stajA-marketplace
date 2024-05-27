const express = require("express");
const cartController = require("../controllers/api/v1/cartController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/add").post(verifyToken,checkRole(['customer']), cartController.addToCart);
router.route("/remove").post(verifyToken,checkRole(['customer']), cartController.removeFromCart);
router.route("/get").get(verifyToken,checkRole(['customer']),cartController.getAllProductsExistsInCart);

module.exports = router;
