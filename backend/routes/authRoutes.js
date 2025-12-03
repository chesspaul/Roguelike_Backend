const express = require("express");
const router = express.Router();

const { registerUser, loginUser, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// públicas
router.post("/register", registerUser);
router.post("/login", loginUser);

// privada
router.get("/me", protect, getMe);

module.exports = router;
