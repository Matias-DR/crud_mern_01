// Se definen esquema, modelo y ruta de acceso a la base de datos para el usuario

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String
})

const user_model = mongoose.model('user', userSchema)
module.exports = router

// La ruta para llegar hasta acá es '/api/user/', por lo que cualquier enlace en cual fuera la petición http, llegará desde '/api/user/<enlace_de_petición>'
router.post('/add_user', (req, res) => {
    const new_user = new user_model({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    // Definición de qué hacer con la inforomación
    new_user.save((err) => {
        if (err) res.send('No se pudo agregar, por favor reintente')
        else res.send('Usuario añadido')
    })
})

router.get('/get_users', (req, res) => {
    user_model.find({}, (err, users) => {
        if (err) res.send('Error al cargar los usuarios, por favor reintente')
        else res.send(users)
    })
})

router.post('/get_user', (req, res) => {
    user_model.findOne({ id: req.body.id }, (err, user) => {
        if (err) res.send('Error al cargar los usuarios, por favor reintente')
        else {
            res.send(user)
        }
    })
})

router.post('/edit_user', (req, res) => {
    user_model.findOneAndUpdate(
        { 'id': req.body.id }, {
        'name': req.body.name,
        'email': req.body.email,
        'phone': req.body.phone
    }, err => {
        if (err) res.send('Error al editar el usuario, por favor reintente')
        else res.send('Usuario editado')
    })
})