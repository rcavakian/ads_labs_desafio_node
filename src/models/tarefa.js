const database = require("../database/database")
const Sequelize = require("sequelize");
const Responsavel = require("../models/responsavel");
// const Tarefa = require("../tarefa/tarefa");

const Tarefa = database.define("tarefas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    data_limite_conclusao: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    concluida: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    timestamp: true
})

// Responsavel.hasMany(Tarefa)
Tarefa.belongsTo(Responsavel)

module.exports = Tarefa
