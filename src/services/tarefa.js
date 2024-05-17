const Tarefa = require("../models/tarefa")

async function list(queryParams) {
    return await Tarefa.findAll({ where: queryParams})
}

async function create(dados) {
    const novaTarefa = await Tarefa.create(dados)
    return novaTarefa
}

async function update(idTarefa, dados) {
    const tarefaEncontrada =  await Tarefa.findbyPk(idTarefa)
    tarefaEncontrada.nome = dados.nome ?? tarefaEncontrada.nome
    tarefaEncontrada.titulo = dados.titulo ?? tarefaEncontrada.titulo
    tarefaEncontrada.descricao = dados.descricao ?? tarefaEncontrada.descricao
    tarefaEncontrada.data_limite_conclusao = dados.data_limite_conclusao ?? tarefaEncontrada.data_limite_conclusao
    tarefaEncontrada.concluida = dados.concluida ?? tarefaEncontrada.concluida
    return tarefaEncontrada
}

async function remove(idTarefa) {
    const tarefaEncontrada = await Tarefa.findbyPk(idTarefa)
    await tarefaEncontrada.destroy()
}



module.exports = { list, create, update, remove }