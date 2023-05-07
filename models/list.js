const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db.config')

class List extends Model { }

List.init({
    nrp : {
        type : DataTypes.INTEGER,
    },
    kegiatan : {
        type : DataTypes.STRING
    },
    status : {
        type : DataTypes.STRING
    },
    tanggal : {
        type : DataTypes.STRING
    }
},{
    sequelize,
    modelName : 'List'
})

module.exports = List