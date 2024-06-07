const express = require("express");
const categoryController = require("../controllers/api/v1/categoryController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/").get(categoryController.getAllCategory);
router.route("/edit/:id").put(verifyToken,checkRole(['seller','admin']),categoryController.editCategory);
router.route("/delete/:id").delete(verifyToken,checkRole(['seller','admin']),categoryController.deleteCategory);
router.route("/").post(verifyToken,checkRole(['seller','admin']), categoryController.createCategory);


module.exports = router;
