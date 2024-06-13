const Responsavel = require("../models/responsavel")
const Tarefa = require("../models/tarefa")
const { Op } = require('sequelize')


async function list(queryParams) {
    return await Responsavel.findAll({ where: queryParams })
}

/**
 * Função que lista responsáveis sem tarefas pendentes
 * @returns {Promise<Array>}
 */
async function listarSemTarefasPendentes() {
    const responsaveisComTarefasPendentes = await Tarefa.findAll({
        attributes: ['responsavelid'],
        where: {
            concluida: false,
            data_limite_conclusao: {
                [Op.gte]: new Date()
            }
        },
        group: ['responsavelid']
    });

    const responsavelIdsComTarefasPendentes = responsaveisComTarefasPendentes.map(tarefa => tarefa.responsavelid);

    return await Responsavel.findAll({
        where: {
            id: {
                [Op.notIn]: responsavelIdsComTarefasPendentes
            }
        }
    });
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
    

module.exports = { list, listarSemTarefasPendentes, create, update, remove }