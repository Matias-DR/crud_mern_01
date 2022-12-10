// Se definen esquema, modelo y ruta de acceso a la base de datos para el usuario
const express = require('express');
const router = express.Router();

const fs = require('fs');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    prof_img: String
})
const user_model = mongoose.model('user', userSchema)
module.exports = router

const user_def_prof_pic = "data:image/png;base64,"+fs.readFileSync('./routes/user_def_prof_pic')

// La ruta para llegar hasta acá es '/api/user/', por lo que cualquier enlace en cual fuera la petición http, llegará desde '/api/user/<enlace_de_petición>'
router.post('/add_user', (req, res) => {
    const new_user = new user_model({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        prof_img: req.body.prof_img ? req.body.prof_img : user_def_prof_pic
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
        else {
            res.send(users)
        }
    })
})

router.post('/get_user', (req, res) => {
    user_model.findOne({ id: req.body.id }, (err, user) => {
        if (err) res.send('Error al cargar los usuarios, por favor reintente')
        else {
            user.prof_img
            res.send(user)
        }
    })
})

// En el caso de definir 'get' para pedir un usuario en vez de 'post', a la hora de tomar el id que se haya pasado, debe tomarse desde 'req.body', ya que la misma será pasada por parámetros mediante la url, y no como cuerpo en el caso de este método
router.post('/edit_user', (req, res) => {
    user_model.findOneAndUpdate(
        { 'id': req.body.id }, {
        'name': req.body.name,
        'email': req.body.email,
        'phone': req.body.phone,
        'prof_img': req.body.prof_img ? req.body.prof_img : user_def_prof_pic
    }, err => {
        if (err) res.send('Error al editar el usuario, por favor reintente')
        else res.send('Usuario editado')
    })
})

router.post('/del_user', (req, res) => {
    user_model.findOneAndDelete({ id: req.body.id }, err => {
        if (err) res.send('Error al eliminar el usuario, por favor reintente')
        else res.send(`Usuario eliminado`)
    })
})