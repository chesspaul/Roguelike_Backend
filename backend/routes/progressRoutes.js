const express = require("express");
const router = express.Router();
const { getProgress, saveProgress } = require("../controllers/progressController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getProgress);
router.post("/", protect, saveProgress);

module.exports = router;
