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
    tarefaEncontrada.nome = dados.nome
    return tarefaEncontrada
}

async function remove(idTarefa) {
    const tarefaEncontrada = await Tarefa.findbyPk(idTarefa)
    await tarefaEncontrada.destroy()
}



module.exports = { list, create, update, remove }