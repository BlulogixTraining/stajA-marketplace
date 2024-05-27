const express = require("express");
const authController = require("../controllers/api/v1/authController");
const roleMiddleware = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/signup").post(authController.createUser);
router.route("/login").post(authController.loginUser);
router.route("/:id").delete(roleMiddleware(['admin']),authController.deleteUser);
router.route("/").get(authController.getAllUsers);

module.exports = router;
