// Dar de alta servidor
const xp = require('express')
const app = xp()

// Traemos la conexión a la base de datos (lo que desde './conection' se exporta, es decir, 'mongoose')
const db = require('./conection')

// Definición de métodos HTML
app.get('/', (req, res) => {
    res.end('Bienvenidos')
})

// Poner el servidor en escucha
app.listen(5000, () => {})