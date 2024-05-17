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
    service.update(req.params.id)
        .then((tarefaEditada) => {
            return res.send({
                message: "Tarefa editada com sucesso",
                tarefa: tarefaEditada
            })
        })
}

function remove(req, res) {
    return res.status(200).send("Olá")
}

module.exports = { list, create, update, remove }