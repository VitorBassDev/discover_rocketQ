const express = require('express')
const route   = require('./router')
const path    = require('path')
require('dotenv/config')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))

app.use(route)

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Executando servidor na porta`, process.env.BACKEND_PORT)
})
