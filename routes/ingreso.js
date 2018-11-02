'use strict';

const express = require('express');
const IngresoController = require('../controllers/ingreso');
const api = express.Router();

api.get('/ingreso/:id', IngresoController.getIngreso);
api.post('/ingreso', IngresoController.saveIngreso);

module.exports = api;
