const express = require("express");
const productVariantController = require("../controllers/api/v1/productVariantController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/").post(verifyToken,checkRole(['admin','seller']), productVariantController.createProductVariant);
router.route("/").get( productVariantController.getProductVariant);


module.exports = router;
