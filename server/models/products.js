const { Schema } = require("mongoose");

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  type: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  make: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  range: {
    type: Number,
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },
});

module.exports = productsSchema;
