const express = require("express");
const categoryController = require("../controllers/api/v1/categoryController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/").get(categoryController.getAllCategory);
router.route("/").post(verifyToken, categoryController.createCategory);

module.exports = router;
