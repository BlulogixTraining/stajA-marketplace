const express = require("express");
const categoryController = require("../controllers/api/v1/categoryController");
const verifyToken = require('../middleware/api/v1/authMiddleware');
const router = express.Router();

router.route("/").get(verifyToken,categoryController.getAllCategory);
router.route("/").post(verifyToken,categoryController.createCategory);

module.exports = router;
