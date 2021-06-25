const express = require('express')
require('dotenv/config')

const app = express()

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Executando servidor na porta`, process.env.BACKEND_PORT)
})
