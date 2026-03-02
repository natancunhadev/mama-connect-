const express = require('express')
const cors = require('cors')

const app = express()

// Middlewares globais
app.use(cors())
app.use(express.json())

// Rota teste
app.get('/', (req, res) => {
  res.json({ message: 'Mama Connect API is running 💛' })
})

module.exports = app