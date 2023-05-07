const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class Karyawan extends Model { }

Karyawan.init({
    nrp : {
        type : DataTypes.INTEGER,
        unique : true
    },
    nama : {
        type : DataTypes.STRING
    },
    password : {
        type : DataTypes.STRING
    }
},{
    sequelize,
    modelName : 'Karyawan'
})

module.exports = Karyawan