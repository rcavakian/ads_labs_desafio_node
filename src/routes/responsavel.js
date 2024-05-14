const express = require('express')
const responsavelController = require("../controllers/responsavel")

const router = express.Router()

router.get("/", responsavelController.list)

router.post("/", responsavelController.create)

router.put("/", responsavelController.update)

router.delete("/id:", responsavelController.remove)

module.exports = router