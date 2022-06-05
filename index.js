import app from './src/index.js'

/* Escuchando el puerto 3001. */
app.listen(process.env.PORT || 3001, () =>
    console.log(
        '🔥 El servidor está escuchando en: ' + (process.env.PORT || 3001)
    )
)
