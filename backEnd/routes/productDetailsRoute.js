const express = require("express");
const productDetailsController = require("../controllers/api/v1/productDetailsController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/details").post(verifyToken, productDetailsController.createDetails);
router.route("/details").get(productDetailsController.getDetails);
router.route("/details/:id").delete(productDetailsController.deleteDetails);
module.exports = router;
