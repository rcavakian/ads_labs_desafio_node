require("dotenv").config({ path: ".env"})
const express = require('express')
require("./database/database")
const tarefaRouter = require("./routes/tarefa")
const responsavelRouter = require("./routes/responsavel")


const app = express()
app.use(express.json())

app.use("/tarefa", tarefaRouter)
app.use("/responsavel", responsavelRouter)


app.listen(process.env.PORT, () => {console.log(`Servidor escutando na porta ${process.env.PORT}`)})

module.exports = app
