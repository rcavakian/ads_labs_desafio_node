const Responsavel = require("../models/responsavel")

async function list() {
    return await Responsavel.findAll()
}

async function create(dados) {
    const novoResponsavel = await Responsavel.create(dados)
    return novoResponsavel
}

async function update(idResponsavel, dados) {
    const responsavelEncontrado =  await Responsavel.findbyPk(idResponsavel)
    
    if (responsavelEncontrado) {
        responsavelEncontrado.nome = dados.nome ?? responsavelEncontrado.nome
        responsavelEncontrado.data_nascimento = dados.data_nascimento ?? responsavelEncontrado.data_nascimento
        await responsavelEncontrado.save()
    }
    return responsavelEncontrado
}

async function remove(idResponsavel) {
    const responsavelEncontrado = await Responsavel.findbyPk(idResponsavel)
    await responsavelEncontrado.destroy()
}

module.exports = { list, create, update, remove }