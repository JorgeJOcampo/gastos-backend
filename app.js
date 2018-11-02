'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const gasto_routes = require('./routes/gasto');
const ingreso_routes = require('./routes/ingreso');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', gasto_routes);
app.use('/api', ingreso_routes);

module.exports = app;
