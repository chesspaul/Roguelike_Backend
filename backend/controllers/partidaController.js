const asyncHandler = require("express-async-handler");
const Run = require("../models/partidaModel");

// Obtener todas las partidas de un usuario
const getPartidas = asyncHandler(async (req, res) => {
  const partidas = await Run.find({ user: req.user.id }).populate('enemigosGenerados');
  res.status(200).json(partidas);
});

// Obtener una partida específica de un usuario
const getPartidaById = asyncHandler(async (req, res) => {
  const partida = await Run.findOne({ _id: req.params.id, user: req.user.id }).populate('enemigosGenerados');
  if (!partida) {
    res.status(404);
    throw new Error("Partida no encontrada");
  }
  res.status(200).json(partida);
});

// Crear una nueva partida
const createPartida = asyncHandler(async (req, res) => {
  const { hpActual, hpMaximo, nivelActual, armaActual, sinergiasActivas, enemigosGenerados } = req.body;
  const partida = await Run.create({
    user: req.user.id,
    hpActual,
    hpMaximo,
    nivelActual,
    armaActual,
    sinergiasActivas,
    enemigosGenerados,
  });
  res.status(201).json(partida);
});

// Actualizar una partida existente
const updatePartida = asyncHandler(async (req, res) => {
  const partida = await Run.findOne({ _id: req.params.id, user: req.user.id });
  if (!partida) {
    res.status(404);
    throw new Error("Partida no encontrada");
  }
  Object.assign(partida, req.body);
  await partida.save();
  res.status(200).json(partida);
});

// Eliminar una partida
const deletePartida = asyncHandler(async (req, res) => {
  const partida = await Run.findOne({ _id: req.params.id, user: req.user.id });
  if (!partida) {
    res.status(404);
    throw new Error("Partida no encontrada");
  }
  await partida.deleteOne();
  res.status(204).end();
});

module.exports = {
  getPartidas,
  getPartidaById,
  createPartida,
  updatePartida,
  deletePartida,
};