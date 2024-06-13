const express = require('express')
const responsavelController = require("../controllers/responsavel")
const middlewares = require("../middlewares/middlewares")
const router = express.Router()

router.get("/", responsavelController.list)

router.get("/sem-tarefas-pendentes", responsavelController.listarSemTarefasPendentes)

router.post("/", middlewares.validacaoNome, middlewares.validarDataNascimento, middlewares.validacaoIdadeResponsavel, responsavelController.create)

router.put("/:id", middlewares.validacaoNome, responsavelController.update)

router.delete("/:id", responsavelController.remove)

module.exports = router