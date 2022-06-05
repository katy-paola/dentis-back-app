import { Router } from 'express'
import { login } from '../controllers/auth.controller.js'

/* Creación de un nuevo objeto router. */
const router = Router()

/* Creación de una nueva ruta para el inicio de sesión. */
router.post('/login', login)

export default router
