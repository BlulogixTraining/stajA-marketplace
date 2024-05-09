const express = require("express");
const proprtiesController = require("../controllers/api/v1/proprtiesController");
const verifyToken = require("../middleware/api/v1/verifytoken");
const router = express.Router();

router.route("/").post(verifyToken, proprtiesController.createProprties);
router.route("/").get( proprtiesController.getProprties);


module.exports = router;
