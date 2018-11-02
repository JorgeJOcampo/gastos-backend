'use strict';

const express = require('express');
const GastoController = require('../controllers/gasto');
const api = express.Router();

api.get('/gasto/:id', GastoController.getGasto);
api.post('/gasto', GastoController.saveGasto);

module.exports = api;
