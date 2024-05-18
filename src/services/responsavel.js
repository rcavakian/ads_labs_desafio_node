const Responsavel = require("../models/responsavel")
const Tarefa = require("../models/tarefa")
const Sequelize = require('sequelize')


async function list(queryParams) {
    return await Responsavel.findAll({ where: queryParams })
}

async function listarResponsaveisSemTarefasPendentes() {
    try {
      const responsaveis = await Sequelize.query(
        `
        SELECT "responsaveis"."id", "responsaveis"."nome", "responsaveis"."data_nascimento", 
               "responsaveis"."createdAt", "responsaveis"."updatedAt"
        FROM "responsaveis"
        LEFT JOIN "tarefas" ON "responsaveis"."id" = "tarefas"."responsavelid" AND "tarefas"."concluida" = false
        GROUP BY "responsaveis"."id"
        HAVING COUNT("tarefas"."id") = 0;
        `,
        { type: Sequelize.QueryTypes.SELECT }
      );
      return responsaveis;
    } catch (error) {
      console.error('Erro ao listar responsáveis sem tarefas pendentes:', error);
      throw error;
    }
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
    

module.exports = { list, listarResponsaveisSemTarefasPendentes, create, update, remove }