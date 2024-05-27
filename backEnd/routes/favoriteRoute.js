const express = require("express");
const favoriteController = require("../controllers/api/v1/favoriteController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const checkRole = require("../middleware/api/v1/checkRole");

const router = express.Router();

router.route("/add").post(verifyToken,checkRole(['customer']), favoriteController.addToFavorite);
router.route("/remove").post(verifyToken,checkRole(['customer']), favoriteController.removeFromFavorite);
router.route("/get").get(verifyToken,checkRole(['customer']), favoriteController.getAllProductsExistsInFavorite);

module.exports = router;
