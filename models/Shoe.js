const { Schema, model } = require("mongoose");

const ShoeSchema = Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
    unique: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  colors: {
    type: Array,
    required: true,
  },
});

module.exports = model("Shoe", ShoeSchema);
