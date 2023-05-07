const express = require('express')
const router = express.Router()
const ModelKaryawan = require('../models/karyawan')
const bycrypt = require('bcrypt')
const passwordCheck = require('../utils/passwordCheck')

//endpoint utama Method Get / Read Data
router.get('/', async(req, res) => {
    const karyawan = await ModelKaryawan.findAll()
    res.status(200).json({
        data : karyawan,
        metadata : "Get All Data Karyawan"
    })
})

//Endpoint Method Post / Create Data
router.post('/', async(req, res) => {
    
    const {nrp, nama, password} = req.body
    
    const encryptedPassword = await bycrypt.hash(password, 10)

    const mahasiswa = await ModelKaryawan.create({
        nrp, nama, password: encryptedPassword
    })

    res.status(200).json({
        status : 200,
        data : mahasiswa,
        metadata : "Post Data Karyawan"
    })
})

//endpoint method Post / Login Mahasiswa
router.post('/login', async(req, res) => {
    const {nrp, password} = req.body

    const check = await passwordCheck(nrp, password)
    
    if(check.compare === true){
        res.status(200).json({
            status : 200,
            users : check.dataMahasiswa,
            metadata: "Login Berhasil"
        })
    }else{
        res.status(400).json({
            error: "Data Invalid"
        })
    }
})

//Endpoint Method Put / Update Data Mahasiswa
router.put('/', async(req, res) => {
    
    const {nrp, nama, password, passwordBaru} = req.body
  
    const check = await passwordCheck(nrp, password)

    const encryptedPassword = await bycrypt.hash(passwordBaru, 10)

    // res.json({userData})
    if(check.compare === true){
        const users = await ModelKaryawan.update({
            nama, password : encryptedPassword
        }, { where: { nrp: nrp }})    
        res.status(200).json({
            status : 200,
            users: {updated: users[0]},
            metadata: "Updates Data Karyawan"
        })
    }else{
        res.status(400).json({
            "error": "data invalid"
        })
    }
 
})


//Endpoint Method Delete / Delete Data Mahawaswa
router.delete('/', async(req, res) => {
    
    const {nrp} = req.body
  
    const list = await ModelKaryawan.destroy({
      where: { nrp : nrp }
    })    
    
    res.status(200).json({
        data: {Deleted: list[0]},
        metadata: "Destroy Data Karyawan"
    })
   
})



module.exports = router