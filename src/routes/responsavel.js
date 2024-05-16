const express = require('express')
const responsavelController = require("../controllers/responsavel")
const middleware = require("../middlewares/middlewares")


const router = express.Router()

router.get("/", responsavelController.list)

router.post("/", middleware.validacaoNome, responsavelController.create)

router.put("/", middleware.validacaoNome, responsavelController.update)

router.delete("/id:", responsavelController.remove)

module.exports = router