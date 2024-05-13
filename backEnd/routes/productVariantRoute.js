const express = require("express");
const productVariantController = require("../controllers/api/v1/productVariantController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/").post(verifyToken, productVariantController.createProductVariant);
router.route("/").get( productVariantController.getProductVariant);


module.exports = router;
