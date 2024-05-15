const database = require("../database/database")
const Sequelize = require("sequelize")

const Responsavel = database.define ("responsavel", {
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

module.exports = Responsavel