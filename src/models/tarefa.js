const database = require("../database/database")
const Sequelize = require("sequelize")

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
    id_responsavel: {
        
    }
}, {})
