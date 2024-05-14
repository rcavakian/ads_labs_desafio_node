require("dotenv").config({ path: ".env"})
const express = require('express')
const tarefaRouter = require("./routes/tarefa")
require("./database/database")


const app = express()
app.use(express.json())
app.use("/tarefa", tarefaRouter)


app.listen(process.env.PORT, () => {console.log(`Servidor escutando na porta ${process.env.PORT}`)})

module.exports = app
