const express = require("express");
const productController = require("../controllers/api/v1/productController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/").get(productController.getAllProducts);
router.route("/:slug").get(productController.getProductDetails);
router
  .route("/").post(verifyToken,checkRole(["seller"]),
    productController.createProduct
  );
router.route("/edit/:id").put(verifyToken, checkRole(["admin","seller"]),productController.editProduct);
router.route("/delete/:id").delete(verifyToken, checkRole(["admin","seller"]),productController.deleteProduct);


module.exports = router;
