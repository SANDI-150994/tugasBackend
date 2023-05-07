const {Sequelize } = require('sequelize')

const sequelize = new Sequelize('tugasbe','root','',{
    dialect: 'mysql',
    host : 'localhost'
})

module.exports = sequelize