const service = require("../services/responsavel")

function list(req, res) {
    service.list(req.query)
        .then((responsaveis) => {
            return res.send({ dados: responsaveis})
        })
}

function create(req, res) {
    service.create(req.body)
        .then((novoResponsavel) => {
            return res.status(201).send({
                message: "Novo responsavel criado",
                tarefa: novoResponsavel
            })
        }, (error) => {
            return res.status(500).send({
                message: error
            })
        })
}

function update(req, res) {
    service.update(req.params.id, req.body)
        .then((responsavelEditado) => {
            return res.send({
                message: "Responsavel editado com sucesso",
                tarefa: responsavelEditado
            })
        }, (error) => {
            return res.status(500).send({
                message: error
            })
        })
}

function remove(req, res) {
    service.remove(req.params.id)
    .then((responsavelRemovido) => {
        return res.send({
            message: "Responsável removido com sucesso",
            tarefa: responsavelRemovido
        })
    }, (error) => {
        return res.status(500).send({
            message: error
        })
    })}

module.exports = { list, create, update, remove }