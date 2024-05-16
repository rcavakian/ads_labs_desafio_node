const Responsavel = require("../models/responsavel")

async function list(queryParams) {
    return await Responsavel.findAll({ where: queryParams})
}

async function create(dados) {
    const novaTarefa = await Responsavel.create(dados)
    return novaTarefa
}

async function update() {
    return responsaveis = await findAll()
    return responsaveis
}

async function remove() {
    return responsaveis = await findAll()
    return responsaveis
}



module.exports = { list, create, update, remove }