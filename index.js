import app from './src/index.js'

app.listen(process.env.PORT || 3000, () =>
    console.log(
        '🔥 El servidor está escuchando en: ' + (process.env.PORT || 3000)
    )
)
