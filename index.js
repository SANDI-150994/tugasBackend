const express = require('express')
const cors = require('cors')
const port = 4000

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log('database ready!'))

const karyawanEndpoint = require('./routes/karyawan')
const listEndpoint = require('./routes/list')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/karyawan', karyawanEndpoint)
app.use('/list', listEndpoint)

app.listen(port,  () => console.log(`running server on port ${port}`))