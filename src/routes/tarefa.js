const express = require('express')
const tarefaController = require("../controllers/tarefa")
const middleware = require("../middlewares/middlewares")


const router = express.Router()

router.get("/", tarefaController.list)

router.post("/", middleware.validacaoTitulo, tarefaController.create)

router.put("/:id", tarefaController.update)

router.delete("/:id", tarefaController.remove)

module.exports = router