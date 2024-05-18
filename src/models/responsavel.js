const database = require("../database/database")
const Sequelize = require("sequelize")
const Tarefa = require("../models/tarefa"); 

const Responsavel = database.define ("responsaveis", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {
    timestamp: true
})

Responsavel.hasMany(Tarefa, { as: 'tarefas', foreignKey: 'responsavelid' });

module.exports = Responsavel