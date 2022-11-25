// Se definen los prarámetros de conexión
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack')

// Se establece la conexión y se la manipula con la variable 'db'
const db = mongoose.connection

// Definición de respuestas ante el estado de la conexión
db.on('connected', () => {console.log('successfull conection')})
db.on('error', () => {console.log('conection error')})

module.exports = mongoose