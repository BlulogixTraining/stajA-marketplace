const express = require("express");
const verifyToken = require('../middleware/api/v1/verifytoken');
const checkRole = require("../middleware/api/v1/checkRole");

const AddressController = require("../controllers/api/v1/AddressController");

const router = express.Router();

router.route("/").get(verifyToken,AddressController.getAddresses);
router.route("/").post(verifyToken,checkRole(['customer']),AddressController.createAddress);
router.route("/:id").delete(verifyToken,checkRole(['customer']),AddressController.deleteAddress);
router.route("/:id").put(verifyToken,checkRole(['customer']),AddressController.editAddress);


module.exports = router;
