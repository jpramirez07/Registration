const {Sequelize, DataTypes} = require('sequelize')
//connect to database
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '9865eva812', 
    port: 5432,
    database: 'timeControl',
})

module.exports = {db, DataTypes}