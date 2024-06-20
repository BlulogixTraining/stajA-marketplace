const express = require("express");
const sellerDashboardController = require("../controllers/api/v1/sellerDashboardController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/").get(verifyToken, sellerDashboardController.getProductsRelatedToSeller);
router.route("/details/:slug").get( sellerDashboardController.getSellerDetails);


module.exports = router;
