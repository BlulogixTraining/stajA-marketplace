const express = require("express");
const StoreController = require("../controllers/api/v1/StoreController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");
const router = express.Router();

router.route("/").get(verifyToken, StoreController.getAllStores);
router.route("/").post(verifyToken, checkRole(["admin","seller"]),StoreController.createStore);
router.route("/edit/:id").put(verifyToken,checkRole(["admin","seller"]), StoreController.editStore);
router.route("/delete/:id").delete(verifyToken,checkRole(["admin","seller"]), StoreController.deleteStore);


module.exports = router;
