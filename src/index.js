import express from 'express'
import cors from 'cors'
import routerUsuarios from './routes/usuarios.routes.js'
import routerCitas from './routes/citas.routes.js'
import routerAuth from './routes/auth.routes.js'

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Dentis Web!!')
})

app.use('/auth', routerAuth)

app.use('/usuarios', routerUsuarios)

app.use('/citas', routerCitas)

export default app
