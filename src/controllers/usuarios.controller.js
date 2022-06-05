import prisma from '../lib/prisma.js'

/**
 * Obtiene todos los usuarios de la base de datos y los devuelve en formato JSON.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const getUsuarios = async (req, res) => {
    const usuarios = await prisma.usuario.findMany({
        select: {
            id: true,
            nombre: true,
            cedula: true,
            email: true,
            clave: false,
            rol: true,
            telefono: true,
            createdAt: true,
        },
    })
    res.json(usuarios)
}

/**
 * Obtiene el id del usuario de la solicitud, luego obtiene el usuario de la base de datos, y finalmente
 * devuelve el usuario en la respuesta.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const getUsuario = async (req, res) => {
    const id = req.params.id
    const usuario = await prisma.usuario.findFirst({
        where: { id: parseInt(id) },
        include: {
            citas: true,
        },
    })

    res.json(usuario)
}

/**
 * Crea un nuevo usuario en la base de datos.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const createUsuario = async (req, res) => {
    //se recibe la información del usuario
    const nuevoUsuario = await prisma.usuario.create({
        //se crea en la base de datos
        data: req.body,
    })

    res.json(nuevoUsuario)
}

/**
 * Toma el id de los params de la solicitud, y luego actualiza el usuario con el id con los datos de
 * el cuerpo de la solicitud.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const updateUsuario = async (req, res) => {
    const id = req.params.id
    const usuarioActualizado = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: req.body,
    })

    res.json(usuarioActualizado)
}

/**
 * Elimina un usuario de la base de datos.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const deleteUsuario = async (req, res) => {
    const id = req.params.id
    const usuarioBorrado = await prisma.usuario.delete({
        where: { id: parseInt(id) },
    })

    res.json(usuarioBorrado)
}

/**
 * Obtiene la cédula de los parámetros de la solicitud, luego busca el usuario con esa cédula en la
 * base de datos, y finalmente devuelve el usuario con todas sus citas.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
export const getCedula = async (req, res) => {
    const cedula = req.params.cedula
    const usuario = await prisma.usuario.findFirst({
        where: { cedula },
        include: {
            citas: true,
        },
    })

    res.json(usuario)
}
