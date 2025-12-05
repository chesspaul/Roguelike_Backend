const asyncHandler = require("express-async-handler");
const Nivel = require("../models/nivelModel");


const getNiveles = asyncHandler(async (req, res) => {
  const niveles = await Nivel.find().populate('enemigos jefe');
  res.status(200).json(niveles);
});

// Obtener nivel específico
const getNivelById = asyncHandler(async (req, res) => {
  const nivel = await Nivel.findById(req.params.id).populate('enemigos jefe');
  if (!nivel) {
    res.status(404);
    throw new Error("Nivel no encontrado");
  }
  res.status(200).json(nivel);
});

// Crear nuevo nivel
const createNivel = asyncHandler(async (req, res) => {
  const { numeroNivel, tipo, semillaGeneracion, enemigos, jefe } = req.body;
  const nivel = await Nivel.create({ numeroNivel, tipo, semillaGeneracion, enemigos, jefe });
  res.status(201).json(nivel);
});

// Actualizar nivel
const updateNivel = asyncHandler(async (req, res) => {
  const nivel = await Nivel.findById(req.params.id);
  if (!nivel) {
    res.status(404);
    throw new Error("Nivel no encontrado");
  }
  Object.assign(nivel, req.body);
  await nivel.save();
  res.status(200).json(nivel);
});

// Eliminar nivel
const deleteNivel = asyncHandler(async (req, res) => {
  const nivel = await Nivel.findById(req.params.id);
  if (!nivel) {
    res.status(404);
    throw new Error("Nivel no encontrado");
  }
  await nivel.deleteOne();
  res.status(204).end();
});

module.exports = {
  getNiveles,
  getNivelById,
  createNivel,
  updateNivel,
  deleteNivel,
};