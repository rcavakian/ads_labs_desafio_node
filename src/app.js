require("dotenv").config({ path: ".env"})
const express = require('express')

const app = express()
app.use(express.json())

app.get('/listar', (req, res) => res.send("Ola mundo"))

app.listen(process.env.PORT, () => {console.log(`Servidor escutando na porta ${process.env.PORT}`)})

module.exports = app
