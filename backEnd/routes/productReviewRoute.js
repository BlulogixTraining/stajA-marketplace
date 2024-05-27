const express = require("express");
const productReviewController = require("../controllers/api/v1/productReviewController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");
const router = express.Router();

router.route("/").get(productReviewController.getAllReviews);
router.route("/:id").post(verifyToken,checkRole(['customer']), productReviewController.createReview);

module.exports = router;
