const Tarefa = require("../models/tarefa")

/**
 * Função que lista todas as tarefas na base de dados
 * @param {*} queryParams 
 * @returns 
 */
async function list(queryParams) {
    return await Tarefa.findAll({ where: queryParams })
}

async function listAllFromResponsavel(queryParams) {
    return await Tarefa.findAll({ where: queryParams })
}

async function create(dados) {
    const novaTarefa = await Tarefa.create(dados)
    return novaTarefa
}

async function update(idTarefa, dados) {
    const tarefaEncontrada =  await Tarefa.findByPk(idTarefa)

    if (tarefaEncontrada) {
        tarefaEncontrada.nome = dados.nome ?? tarefaEncontrada.nome
        tarefaEncontrada.titulo = dados.titulo ?? tarefaEncontrada.titulo
        tarefaEncontrada.descricao = dados.descricao ?? tarefaEncontrada.descricao
        tarefaEncontrada.data_limite_conclusao = dados.data_limite_conclusao ?? tarefaEncontrada.data_limite_conclusao
        tarefaEncontrada.concluida = dados.concluida ?? tarefaEncontrada.concluida
        tarefaEncontrada.responsavelid = dados.responsavelid ?? tarefaEncontrada.responsavelid
        await tarefaEncontrada.save()
    }
    return tarefaEncontrada
}

async function remove(idTarefa) {
    const tarefaEncontrada = await Tarefa.findByPk(idTarefa)
    if (tarefaEncontrada) {
        await tarefaEncontrada.destroy()    
    }
    return tarefaEncontrada
    
}

module.exports = { list, listAllFromResponsavel, create, update, remove }