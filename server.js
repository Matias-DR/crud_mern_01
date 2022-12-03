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
const user_route = require ('./routes/user')

// Si se utiliza1 body parser, debe importarse en el servidor
const bp = require('body-parser');

// Con 'app.use()' se indica al servidor qué componentes/herramientas utilizar durante el funcionamiento, específicamente, un middleware es una función que se puede ejecutar antes o después del manejo de una ruta. Esta función tiene acceso al objeto Request, Response y la función next()
// La dirección 'api' es convencional en tanto al ingreso desde un cliente mediante el servidor hacia la base de datos
app.use('/api/user', user_route)

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))