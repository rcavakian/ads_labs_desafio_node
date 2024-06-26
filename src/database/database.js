const Sequelize = require("sequelize")

const database = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST
    }
)

console.log(`Databse ${process.env.DB_NAME} criada`)

module.exports = database

require("../models/responsavel")
require("../models/tarefa")

database.sync({ alter: true })
