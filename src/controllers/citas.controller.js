import prisma from '../lib/prisma.js'

export const getCitas = async (req, res) => {
    const citas = await prisma.cita.findMany()
    res.json(citas)
}

export const getCita = async (req, res) => {
    const id = req.params.id
    const cita = await prisma.cita.findFirst({
        where: { id: parseInt(id) },
    })

    res.json(cita)
}

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

//reprogramar o cancelar una cita
export const updateCita = async (req, res) => {
    // desestructuración de los datos
    const { fechaHora, estado, motivo } = req.body
    const id = req.params.id
    const citaActualizada = await prisma.cita.update({
        where: { id: parseInt(id) },
        data: {
            fechaHora: fechaHora || undefined,
            estado: estado || undefined,
            motivo: motivo || undefined,
        },
    })

    res.json(citaActualizada)
}

export const deleteCita = async (req, res) => {
    const id = req.params.id
    const citaBorrada = await prisma.cita.delete({
        where: { id: parseInt(id) },
    })

    res.json(citaBorrada)
}

//buscar citas por fecha
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
