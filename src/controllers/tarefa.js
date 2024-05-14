const service = require('../services/tarefa')

function list(req, res) {
    return res.status(200).send({ 
        tarefas: service.list() 
    })
}

function update(req, res) {
    return res.status(200).send("Olá")
}

function create(req, res) {
    return res.status(200).send("Olá")
}

function remove(req, res) {
    return res.status(200).send("Olá")
}

module.exports = { list, create, update, remove }