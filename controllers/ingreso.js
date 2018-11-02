'use strict';

const Ingreso = require('../models/ingreso');

function getIngreso(req, res){
    const ingresoId = req.params.id;
    ingreso.findById(ingresoId)
        .then((ingreso) => res.status(200).send({ingreso:ingreso}))
        .catch((err) => res.status(500).send({message: 'Error en la peticion'}));
}

function saveIngreso(req, res) {
    let ingreso = new Ingreso();

    const params = req.params;
    ingreso.amount = params.amount;
    ingreso.description = params.description;
    ingreso.category = params.category;

    ingreso.save()
        .then((ingreso) => res.status(200).send({ingreso:ingreso}))
        .catch((err) => res.status(500).send({message: 'Error al guardar el ingreso'}));
}

module.exports = {
    getIngreso, saveIngreso
};