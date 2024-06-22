const express = require("express");
const orderController = require("../controllers/api/v1/orderController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/").post(verifyToken,checkRole(["customer"]), orderController.createOrder);
router.route("/").get(verifyToken, orderController.getAllOrders);
router.route("/details/:id").get(verifyToken, orderController.orderDetails);

router.route("/:id").delete(verifyToken,checkRole(["customer"]), orderController.deleteOrder);


module.exports = router;
