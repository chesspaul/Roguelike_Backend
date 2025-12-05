const express = require("express");
const router = express.Router();
const { getEnemigos, getEnemigoById, createEnemigo, updateEnemigo, deleteEnemigo } = require("../controllers/enemigosController");

router.route("/")
  .get(getEnemigos)
  .post(createEnemigo);

router.route("/:id")
  .get(getEnemigoById)
  .put(updateEnemigo)
  .delete(deleteEnemigo);

module.exports = router;