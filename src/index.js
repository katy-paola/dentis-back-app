import express from 'express'
import cors from 'cors'
import routerUsuarios from './routes/usuarios.routes.js'
import routerCitas from './routes/citas.routes.js'
import routerAuth from './routes/auth.routes.js'

/* Creamos una instancia de Express JS */
const app = express()

/* Un middleware para aceptar requisitos de cualquier dominio. */
app.use(cors())

/* Un middleware que analiza el cuerpo de la solicitud y lo hace disponible en la propiedad req.body. */
app.use(express.json())

/* Este es un manejador de rutas. Se ejecuta cuando se realiza una petición a la ruta raíz del servidor. */
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Dentis Web!!')
})

/* Un middleware que se ejecuta cuando se hace una petición a la ruta `/auth`. */
app.use('/auth', routerAuth)

/* Un middleware que se ejecuta cuando se hace una petición a la ruta `/usuarios`. */
app.use('/usuarios', routerUsuarios)

/* Un middleware que se ejecuta cuando se hace una petición a la ruta `/citas`. */
app.use('/citas', routerCitas)

export default app
