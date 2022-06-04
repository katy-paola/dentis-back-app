import prisma from '../lib/prisma.js'

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

export const createUsuario = async (req, res) => {
    //se recibe la información del usuario
    const nuevoUsuario = await prisma.usuario.create({
        //se crea en la base de datos
        data: req.body,
    })

    res.json(nuevoUsuario)
}

export const updateUsuario = async (req, res) => {
    const id = req.params.id
    const usuarioActualizado = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: req.body,
    })

    res.json(usuarioActualizado)
}

export const deleteUsuario = async (req, res) => {
    const id = req.params.id
    const usuarioBorrado = await prisma.usuario.delete({
        where: { id: parseInt(id) },
    })

    res.json(usuarioBorrado)
}

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
