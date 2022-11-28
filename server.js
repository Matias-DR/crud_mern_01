// Dar de alta servidor
const xp = require('express')
const app = xp()

// Definición de métodos HTML
app.get('/', (req, res) => {
    res.end('Bienvenidos')
})

// Poner el servidor en escucha
app.listen(5000, () => {})

// Traemos la conexión a la base de datos (lo que desde './conection' se exporta, es decir, 'mongoose')
const db = require('./conection')

// Traemos las rutas y los modelos de tablas
// Mediante estas rutas se accede a la db
const userRoute = require ('./routes/user')
// La dirección 'api' es convencional en tanto al ingreso desde un cliente mediante el servidor hacia la base de datos
app.use('/api/user', userRoute)