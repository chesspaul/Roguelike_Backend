const asyncHandler = require("express-async-handler");
const Enemigo = require("../models/enemigosModel");

// Obtener todos los enemigos
const getEnemigos = asyncHandler(async (req, res) => {
  const enemigos = await Enemigo.find();
  res.status(200).json(enemigos);
});

// Obtener un enemigo específico
const getEnemigoById = asyncHandler(async (req, res) => {
  const enemigo = await Enemigo.findById(req.params.id);
  if (!enemigo) {
    res.status(404);
    throw new Error("Enemigo no encontrado");
  }
  res.status(200).json(enemigo);
});

// Crear nuevo enemigo
const createEnemigo = asyncHandler(async (req, res) => {
  const { tipo, vida, daño, posicionInicial, comportamientoIA } = req.body;
  const enemigo = await Enemigo.create({ tipo, vida, daño, posicionInicial, comportamientoIA });
  res.status(201).json(enemigo);
});

// Actualizar enemigo existente
const updateEnemigo = asyncHandler(async (req, res) => {
  const enemigo = await Enemigo.findById(req.params.id);
  if (!enemigo) {
    res.status(404);
    throw new Error("Enemigo no encontrado");
  }
  Object.assign(enemigo, req.body);
  await enemigo.save();
  res.status(200).json(enemigo);
});

// Eliminar enemigo
const deleteEnemigo = asyncHandler(async (req, res) => {
  const enemigo = await Enemigo.findById(req.params.id);
  if (!enemigo) {
    res.status(404);
    throw new Error("Enemigo no encontrado");
  }
  await enemigo.deleteOne();
  res.status(204).end();
});

module.exports = {
  getEnemigos,
  getEnemigoById,
  createEnemigo,
  updateEnemigo,
  deleteEnemigo,
};