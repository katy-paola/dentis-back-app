import prisma from '../lib/prisma.js'

/**
 * Es una función que utiliza el cliente Prisma para consultar la base de datos para todos los registros en la tabla Cita
 * y luego los devuelve como una respuesta JSON
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const getCitas = async (req, res) => {
    const citas = await prisma.cita.findMany()
    res.json(citas)
}

/**
 * Obtiene una cita de la base de datos utilizando el identificador pasado en la solicitud.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const getCita = async (req, res) => {
    const id = req.params.id
    const cita = await prisma.cita.findFirst({
        where: { id: parseInt(id) },
    })

    res.json(cita)
}

/**
 * Crea una nueva cita en la base de datos y devuelve la nueva cita.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const createCita = async (req, res) => {
    // desestructuración de los datos
    const { idPaciente, fechaHora, estado, motivo } = req.body
    //se recibe la información de la cita
    const nuevaCita = await prisma.cita.create({
        //se crea en la base de datos
        data: {
            fechaHora,
            estado,
            motivo,
            paciente: {
                connect: {
                    id: parseInt(idPaciente),
                },
            },
        },
    })
    res.json(nuevaCita)
}

/**
 * Actualiza una cita en la base de datos.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const updateCita = async (req, res) => {
    // desestructuración de los datos
    const { fechaHora, estado, motivo, solicitud } = req.body
    const id = req.params.id
    const citaActualizada = await prisma.cita.update({
        where: { id: parseInt(id) },
        data: {
            fechaHora: fechaHora || undefined,
            estado: estado || undefined,
            motivo: motivo || undefined,
            solicitud: solicitud || undefined,
        },
    })

    res.json(citaActualizada)
}

/**
 * Elimina una cita de la base de datos.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const deleteCita = async (req, res) => {
    const id = req.params.id
    const citaBorrada = await prisma.cita.delete({
        where: { id: parseInt(id) },
    })

    res.json(citaBorrada)
}

/**
 * Toma una fecha del cuerpo de la solicitud, encuentra todas las citas en la base de datos y
 * devuelve las que coinciden con la fecha
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const getCitaByDay = async (req, res) => {
    //desestructuración de los datos
    const { fecha } = req.body
    const citas = await prisma.cita.findMany()
    const igualFecha = []
    const fechaAux = new Date(fecha)
    fechaAux.setHours(0, 0, 0, 0)

    //ciclo para comparar todas las fechas
    citas.forEach((cita) => {
        let fechaCita = new Date(cita.fechaHora)
        fechaCita.setHours(0, 0, 0, 0)
        if (fechaAux.getTime() == fechaCita.getTime()) {
            igualFecha.push(cita)
        }
    })

    res.json(igualFecha)
}
