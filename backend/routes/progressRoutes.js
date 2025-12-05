const express = require("express");
const router = express.Router();

const {
  getProgress,
  saveProgress,
  getUnlockedItems,
} = require("../controllers/progressController");
const { protect } = require("../middleware/authMiddleware");

// Progreso general del jugador
router.get("/", protect, getProgress);

// Guardar / actualizar progreso
router.post("/", protect, saveProgress);

//lista de objetos desbloqueados
router.get("/unlocked-items", protect, getUnlockedItems);

module.exports = router;
