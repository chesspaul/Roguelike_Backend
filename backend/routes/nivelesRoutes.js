const express = require("express");
const router = express.Router();
const { getNiveles, getNivelById, createNivel, updateNivel, deleteNivel } = require("../controllers/nivelesController");

router.route("/")
  .get(getNiveles)
  .post(createNivel);

router.route("/:id")
  .get(getNivelById)
  .put(updateNivel)
  .delete(deleteNivel);

module.exports = router;