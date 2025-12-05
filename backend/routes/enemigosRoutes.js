const express = require("express");
const router = express.Router();
const {
  getEnemigos,
  getEnemigoById,
  createEnemigo,
  updateEnemigo,
  deleteEnemigo,
} = require("../controllers/enemigosController");

// GET todos y POST uno nuevo
router.route("/")
  .get(getEnemigos)
  .post(createEnemigo);

// GET, PUT, DELETE por ID
router.route("/:id")
  .get(getEnemigoById)
  .put(updateEnemigo)
  .delete(deleteEnemigo);

module.exports = router;