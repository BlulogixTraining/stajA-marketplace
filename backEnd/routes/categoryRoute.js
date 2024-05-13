const express = require("express");
const categoryController = require("../controllers/api/v1/categoryController");
const variantCategoryController = require("../controllers/api/v1/VariantCategoryController");
const verifyToken = require('../middleware/api/v1/verifytoken');
const router = express.Router();

router.route("/").get(categoryController.getAllCategory);
router.route("/").post(verifyToken,categoryController.createCategory);

router.route("/variant").get(variantCategoryController.getAllVariantCategory);
router.route("/variant").post(verifyToken,variantCategoryController.createVariantCategory);

module.exports = router;
