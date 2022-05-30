import prisma from '../lib/prisma.js'

export const login = async (req, res) => {
    const { email, clave } = req.body
    const usuario = await prisma.usuario.findFirst({
        where: {
            email,
            clave,
        },
    })

    if (!usuario) {
        res.status(401).json({
            message: 'Usuario o contraseña incorrectos',
        })
    } else {
        res.json(usuario)
    }
}
