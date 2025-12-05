const express = require("express");
const router = express.Router();

const { getPartidas, getPartidaById, createPartida, updatePartida, deletePartida } = require("../controllers/partidasController");

router.route("/")
router.get(getPartidas)
router.post(createPartida);

router.route("/:id")
router.get(getPartidaById)
router.put(updatePartida)
router.delete(deletePartida);

module.exports = router;