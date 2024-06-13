const service = require("../services/responsavel")

function list(req, res) {
    service.list(req.query)
        .then((responsaveis) => {
            return res.send({ dados: responsaveis})
        })
}

async function listarSemTarefasPendentes(req, res) {
    try {
        const responsaveisSemTarefasPendentes = await service.listarSemTarefasPendentes();
        res.json(responsaveisSemTarefasPendentes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar responsáveis sem tarefas pendentes' });
    }
}


function create(req, res) {
    service.create(req.body)
        .then((novoResponsavel) => {
            return res.status(201).send({
                message: "Novo responsável criado",
                responsavel: novoResponsavel
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
            if (!responsavelEditado) {
                return res.status(404).send({ message: "Responsável não encontrado" });
            }
            return res.status(201).send({
                message: "Responsavel editado com sucesso",
                responsavel: responsavelEditado
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function remove(req, res) {
    service.remove(req.params.id)
    .then((responsavelRemovido) => {
        if (!responsavelRemovido) {
            return res.status(404).send({ message: "Responsável não encontrado" });
        }
        return res.send({
            message: "Responsável removido com sucesso",
            responsavel: responsavelRemovido
        })
    }, (error) => {
        return res.status(500).send({
            message: error
        })
    })}

module.exports = { list, listarSemTarefasPendentes, create, update, remove }