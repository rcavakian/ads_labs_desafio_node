const database = require("../database/database")
const Sequelize = require("sequelize");
const Responsavel = require("./responsavel");

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

Responsavel.hasMany(Tarefa)
Tarefa.belongsto(Responsavel)

module.exports = Tarefa