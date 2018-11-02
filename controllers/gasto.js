'use strict';

const Gasto = require('../models/gasto');

function getGasto(req, res){
    const gastoId = req.params.id;
    Gasto.findById(gastoId)
        .then((gasto) => res.status(200).send({gasto:gasto}))
        .catch((err) => res.status(500).send({message: 'Error en la peticion'}));
}

function saveGasto(req, res) {
    let gasto = new Gasto();

    const params = req.params;
    gasto.amount = params.amount;
    gasto.description = params.description;
    gasto.category = params.category;

    gasto.save()
        .then((gasto) => res.status(200).send({gasto:gasto}))
        .catch((err) => res.status(500).send({message: 'Error al guardar el gasto'}));
}

module.exports = {
    getGasto, saveGasto
};