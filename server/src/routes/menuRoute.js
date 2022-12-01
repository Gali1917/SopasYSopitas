const express = require('express');

//Importacion del modelo
const menuSchema = require('../models/menuModel');

//Enrutador
const router = express.Router();

//Listar menu
router.get('/menu', (req, res) =>{
    menuSchema
    .find()
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

//Editar menu
router.put('/menu/:id', (req, res) =>{
    const {id} = req.params;
    const {harina, principio, proteina, complemento, sopa, fecha} = req.body;
    menuSchema
    .updateOne({_id: id}, {$set: {harina, principio, proteina, complemento, sopa, fecha}})
    .then((data) =>{
        res.json(data)
    })
    .catch((error) =>{
        res.json({message: error})
    });
});

module.exports = router;
