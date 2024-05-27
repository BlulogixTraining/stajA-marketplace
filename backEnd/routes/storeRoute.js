const express = require("express");
const StoreController = require("../controllers/api/v1/StoreController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");
const router = express.Router();

router.route("/").get(verifyToken, StoreController.getAllStores);
router.route("/").post(verifyToken, checkRole(['seller','admin']),StoreController.createStore);
router.route("/edit/:id").put(verifyToken,checkRole(['seller','admin']), StoreController.editStore);
router.route("/delete/:id").delete(verifyToken,checkRole(['admin']), StoreController.deleteStore);


module.exports = router;
