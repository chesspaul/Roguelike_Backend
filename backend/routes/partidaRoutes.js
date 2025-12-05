const express = require("express");
const router = express.Router();
const {
  getPartidas,
  getPartidaById,
  createPartida,
  updatePartida,
  deletePartida,
} = require("../controllers/partidasController");

// Rutas protegidas por auth: lo asumo porque usas req.user.id
router.route("/")
  .get(getPartidas)
  .post(createPartida);

router.route("/:id")
  .get(getPartidaById)
  .put(updatePartida)
  .delete(deletePartida);

module.exports = router;