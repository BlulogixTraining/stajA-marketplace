const express = require("express");
const favoriteController = require("../controllers/api/v1/favoriteController");

const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/add").post(verifyToken, favoriteController.addToFavorite);
router.route("/remove").post(verifyToken, favoriteController.removeFromFavorite);
router.route("/get").get(verifyToken, favoriteController.getAllProductsExistsInFavorite);

module.exports = router;
