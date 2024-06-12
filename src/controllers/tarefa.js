const service = require('../services/tarefa')

function list(req, res) {
    service.list(req.query)
        .then((tarefas) => {
            return res.send({ dados: tarefas })
        })
}

/**
 * Controller para listar todas as tarefas pendentes de um responsável
 * @param {Request} req 
 * @param {Response} res 
 */
async function listarTarefasPendentes(req, res) {
    try {
        const { responsavelId } = req.params;
        console.log(`Responsavel ID: ${responsavelId}`);
        const tarefasPendentes = await service.listarTarefasPendentes(responsavelId);
        res.json(tarefasPendentes);
    } catch (error) {
        console.error(`Erro ao listar tarefas pendentes: ${error.message}`);
        res.status(500).json({ error: `Erro ao listar tarefas pendentes: ${error.message}` });
    }
}

function create(req, res) {
    service.create(req.body)
        .then((novaTarefa) => {
            return res.status(201).send({
                message: "Nova tarefa criada",
                tarefa: novaTarefa
            })
        }, (error) => {
            return res.status(500).send({
                message: error
            })
        })
}

function update(req, res) {
    service.update(req.params.id, req.body)
        .then((tarefaEditada) => {
            if (!tarefaEditada) {
                return res.status(404).send({ message: "Tarefa não encontrada" });
            }
            return res.status(201).send({
                message: "Tarefa editada com sucesso",
                tarefa: tarefaEditada
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function remove(req, res) {
    service.remove(req.params.id)
    .then((tarefaRemovida) => {
        if (!tarefaRemovida) {
            return res.status(404).send({ message: "Tarefa não encontrada" });
        }
        return res.send({
            message: "Tarefa removida com sucesso",
            tarefa: tarefaRemovida
        })
    }, (error) => {
        return res.status(500).send({
            message: error
        })
    })}

module.exports = { list, listarTarefasPendentes, create, update, remove }