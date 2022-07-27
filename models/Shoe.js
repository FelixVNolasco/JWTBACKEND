
const { Schema, model } = require("mongoose");

const ShoeSchema = Schema({
  shoeCode: {
    type: String,
    required: true,
    unique: true
  },
  model: {
    type: String,
    required: true,
    unique: true
  },
  sizes: {
    type: Array,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = model("Shoe", ShoeSchema);
