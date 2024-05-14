const express = require("express");
const variantCategoryController = require("../controllers/api/v1/variantCategoryController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/").get(variantCategoryController.getAllVariantCategory);
router.route("/").post(verifyToken, variantCategoryController.createVariantCategory);

module.exports = router;
