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

const userModel = mongoose.model('user', userSchema)
module.exports = router

router.get('/test', (req, res)  => {
    res.end('Funcionando')
})