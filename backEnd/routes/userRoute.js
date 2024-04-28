const express = require("express");
const authController = require("../controllers/api/v1/authController");
const verifyToken = require("../middleware/api/v1/verifytoken");

const router = express.Router();

router.route("/signup").post(authController.createUser);
router.route("/login").post(authController.loginUser);
router.route("/logout").get(authController.logoutUser);
router.route("/:id").delete(authController.deleteUser);
router.route("/").get(authController.getAllUsers);

module.exports = router;
