import { Router } from 'express'
import {
    createUsuario,
    deleteUsuario,
    getUsuario,
    getUsuarios,
    updateUsuario,
    getCedula,
} from '../controllers/usuarios.controller.js'

/* Creación de una nueva instancia de la clase Router. */
const router = Router()

//mostrar todos los usuarios
router.get('/', getUsuarios)

//crear usuario
router.post('/', createUsuario)

//obtener usuario
router.get('/:id', getUsuario)

//actualizar usuario
router.put('/:id', updateUsuario)

//borrar usuario
router.delete('/:id', deleteUsuario)

//buscar un usuario por cédula
router.get('/buscar/:cedula', getCedula)

export default router
