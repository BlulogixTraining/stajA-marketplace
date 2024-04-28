const express = require("express");
const verifyToken = require('../middleware/api/v1/verifytoken');

const dashboardController = require("../controllers/api/v1/dashboardController");

const router = express.Router();

router.route("/").get(dashboardController.getDashboard);
router.route("/address").post(verifyToken,dashboardController.createAddress);




module.exports = router;
