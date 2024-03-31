const express = require("express");
const categoryController = require("../controllers/api/v1/categoryController");

const router = express.Router();

router.route("/").get(categoryController.getAllCategory);
router.route("/").post(categoryController.createCategory);

module.exports = router;
