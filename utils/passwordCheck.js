const bycrypt = require('bcrypt')   
const ModelKaryawan = require('../models/karyawan')

const passwordCheck = async(nrp, password) => {
    const dataKaryawan  = await ModelKaryawan.findOne({ where: { nrp: nrp } })  
    const compare = await bycrypt.compare(password, dataKaryawan.password)
    return {compare, dataKaryawan}
}

module.exports = passwordCheck 