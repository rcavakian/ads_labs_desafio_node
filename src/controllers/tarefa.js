const service = require('../services/tarefa')

function list(req, res) {
    service.list(req.query)
        .then((tarefas) => {
            return res.send({ dados: tarefas })
        })
}

function create(req, res) {
    service.create(req.body)
        .then((novaTarefa) => {
            return res.send({
                message: "Nova tarefa criada",
                tarefa: novaTarefa
            })
        })
}

function update(req, res) {
    return res.status(200).send("Olá")
}

function remove(req, res) {
    return res.status(200).send("Olá")
}

module.exports = { list, create, update, remove }