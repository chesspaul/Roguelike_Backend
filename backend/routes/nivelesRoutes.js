const express = require("express");
const router = express.Router();
const { getNiveles, getNivelById, createNivel, updateNivel, deleteNivel } = require("../controllers/nivelesController");

router.route("/")
router.get(getNiveles)
router.post(createNivel);

router.route("/:id")
router.get(getNivelById)
router.put(updateNivel)
router.delete(deleteNivel);

module.exports = router;