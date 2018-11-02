'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngresoSchema = Schema({
  amount: Number,
  description: String,
  category: String
});

module.exports = mongoose.model('Ingreso', IngresoSchema);
