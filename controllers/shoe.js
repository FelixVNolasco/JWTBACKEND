const { response } = require("express");
const Shoe = require("../models/Shoe");

const createShoe = async (req, res = response) => {
  const { model, sizes, color } = req.body;
  try {
    const newShoe = new Shoe(req.body);
    await newShoe.save();
    // Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: newShoe.id,
      model,
      sizes,
      color,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "It's not possible to create the new item",
    });
  }
};


module.exports = {
  createShoe
}