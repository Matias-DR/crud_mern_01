// Se definen esquema, modelo y ruta de acceso a la base de datos para el usuario

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    mail: String,
    phone: String
})

const user_model = mongoose.model('user', userSchema)
module.exports = router

// La ruta para llegar hasta acá es '/api/user/', por lo que cualquier enlace en cual fuera la petición http, llegará desde '/api/user/<enlace_de_petición>'
router.post('/add_user', (req, res)  => {
    const new_user = new user_model({
        id: req.body.id,
        name: req.body.name,
        mail: req.body.email,
        phone: req.body.phone
    })
})