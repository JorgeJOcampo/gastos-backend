'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GastoSchema = Schema({
    amount: Number,
    description: String,
    category: String
});

module.exports = mongoose.model('Gasto', GastoSchema);
