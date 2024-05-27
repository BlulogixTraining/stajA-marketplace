const express = require("express");
const productController = require("../controllers/api/v1/productController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/").get(productController.getAllProducts);
router.route("/:slug").get(productController.getProductDetails);
router
  .route("/").post(verifyToken,checkRole(["seller","admin"]),
    productController.createProduct
  );
router.route("/edit/:id").put(verifyToken, checkRole(["seller","admin"]),productController.editProduct);
router.route("/delete/:id").delete(verifyToken, checkRole(["admin"]),productController.deleteProduct);


module.exports = router;
