const express = require('express')
const tarefaController = require("../controllers/tarefa")
const middlewares = require("../middlewares/middlewares")


const router = express.Router()

router.get("/", tarefaController.list)

router.post("/", middlewares.validacaoTitulo, middlewares.checkDataLImite, tarefaController.create)

router.put("/:id", middlewares.validacaoDataLimite, tarefaController.update)

router.delete("/:id", tarefaController.remove)

router.get("/responsavel/:responsavelId/tarefas-pendentes", tarefaController.listarTarefasPendentes);


module.exports = router