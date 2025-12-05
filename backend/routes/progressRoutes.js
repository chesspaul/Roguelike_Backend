const express = require("express");
const router = express.Router();

const { getProgress, saveProgress, getUnlockedItems } = require("../controllers/progressController");
const { protect } = require("../middleware/authMiddleware");


router.get("/", protect, getProgress);
router.post("/", protect, saveProgress);
router.get("/unlocked-items", protect, getUnlockedItems);

module.exports = router;
