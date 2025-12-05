const express = require("express");
const router = express.Router();
const { getEnemigos, getEnemigoById, createEnemigo, updateEnemigo, deleteEnemigo } = require("../controllers/enemigosController");

router.route("/")
router.get(getEnemigos)
router.post(createEnemigo);

router.route("/:id")
router.get(getEnemigoById)
router.put(updateEnemigo)
router.delete(deleteEnemigo);

module.exports = router;