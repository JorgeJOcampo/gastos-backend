'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/gastos', (err, res) =>{
    if(err){
        console.log("Hay un problema con la base de datos: " +err);
        throw err;
    }else{
        console.log("La base de datos está OK");
        app.listen(port, () => console.log("Iniciado en http://localhost:"+port));
    }
});
