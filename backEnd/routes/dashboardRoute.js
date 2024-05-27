const express = require("express");
const verifyToken = require('../middleware/api/v1/verifytoken');
const checkRole = require("../middleware/api/v1/checkRole");

const dashboardController = require("../controllers/api/v1/dashboardController");

const router = express.Router();

router.route("/").get(verifyToken,dashboardController.getDashboard);
router.route("/address").post(verifyToken,checkRole(['customer']),dashboardController.createAddress);




module.exports = router;
