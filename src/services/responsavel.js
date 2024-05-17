const Responsavel = require("../models/responsavel")

async function list(queryParams) {
    return await Responsavel.findAll({ where: queryParams })
}

async function create(dados) {
    const novoResponsavel = await Responsavel.create(dados)
    return novoResponsavel
}

async function update(idResponsavel, dados) {
    const responsavelEncontrado =  await Responsavel.findByPk(idResponsavel)
    
    if (responsavelEncontrado) {
        responsavelEncontrado.nome = dados.nome ?? responsavelEncontrado.nome
        responsavelEncontrado.data_nascimento = dados.data_nascimento ?? responsavelEncontrado.data_nascimento
        await responsavelEncontrado.save()
    }
    return responsavelEncontrado
}

async function remove(idResponsavel) {
    const responsavelEncontrado = await Responsavel.findByPk(idResponsavel)
    if (responsavelEncontrado) {
        await responsavelEncontrado.destroy()
    }
    return responsavelEncontrado
}
    

module.exports = { list, create, update, remove }