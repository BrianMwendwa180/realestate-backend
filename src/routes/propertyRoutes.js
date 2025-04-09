const express = require("express");
const { getAllProperties } = require("../controllers/propertyController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getAllProperties);

module.exports = router;
