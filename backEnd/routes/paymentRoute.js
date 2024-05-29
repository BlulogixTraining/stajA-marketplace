const express = require("express");
const verifyToken = require('../middleware/api/v1/verifytoken');
const checkRole = require("../middleware/api/v1/checkRole");

const paymentController = require("../controllers/api/v1/paymentController");

const router = express.Router();

router.route("/").get(verifyToken,paymentController.getPayments);
router.route("/").post(verifyToken,checkRole(['customer']),paymentController.createPayment);
router.route("/:id").delete(verifyToken,checkRole(['customer']),paymentController.deletePayment);
router.route("/:id").put(verifyToken,checkRole(['customer']),paymentController.editpayment);


module.exports = router;
