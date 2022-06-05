import prisma from '../lib/prisma.js'

/**
 * Toma el correo electrónico y la contraseña del cuerpo de la solicitud, y luego busca un usuario con ese correo electrónico
 * y contraseña en la base de datos. Si encuentra uno, devuelve el usuario. Si no lo encuentra, devuelve
 * devuelve un mensaje de error.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
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
