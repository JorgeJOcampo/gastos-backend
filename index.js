'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3002;

mongoose.connect('mongodb://localhost:27017/gastos', { useNewUrlParser: true })
    .then(app.listen(port, () => console.log("Iniciado en http://localhost:"+port)))
    .catch(err => console.log("Hay un problema con la base de datos: " +err));