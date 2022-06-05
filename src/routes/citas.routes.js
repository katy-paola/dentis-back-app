import { Router } from 'express'
import {
    createCita,
    deleteCita,
    getCita,
    getCitas,
    updateCita,
    getCitaByDay,
} from '../controllers/citas.controller.js'

/*  Creación de una nueva instancia de la clase Router. */
const router = Router()

//obtener todas las citas
router.get('/', getCitas)

//crear una cita
router.post('/', createCita)

//obtener una cita
router.get('/:id', getCita)

//reprogramar o cancelar una cita
router.put('/:id', updateCita)

//eliminar una cita
router.delete('/:id', deleteCita)

//obtener las citas por día
router.post('/buscar', getCitaByDay)

export default router
