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
            return res.status(201).send({
                message: "Nova tarefa criada",
                tarefa: novaTarefa
            })
        }, (error) => {
            return res.send(500).send({
                message: error
            })
        })
}

function update(req, res) {
    service.update(req.params.id, req.body)
        .then((tarefaEditada) => {
            return res.send({
                message: "Tarefa editada com sucesso",
                tarefa: tarefaEditada
            })
        }, (error) => {
            return res.send(500).send({
                message: error
            })
        })
}

function remove(req, res) {
    service.remove(req.params.id)
    .then((tarefaRemovida) => {
        return res.send({
            message: "Tarefa removida com sucesso",
            tarefa: tarefaRemovida
        })
    }, (error) => {
        return res.send(500).send({
            message: error
        })
    })}

module.exports = { list, create, update, remove }