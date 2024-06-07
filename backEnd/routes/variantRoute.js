const express = require("express");
const categoryController = require("../controllers/api/v1/categoryController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();


router.route("/get").get(categoryController.getAllVariants);
router.route("/create").post(verifyToken, checkRole(['seller','admin']),categoryController.createVariant);

module.exports = router;
