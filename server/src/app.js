const express = require('express')
const cors = require('cors')

require('./config/database')
const pool = require('./config/database')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Mama Connect API is running 💛' })
})

app.get('/health/db', async (req, res) => {
  try {
    const r = await pool.query('SELECT 1 as ok')
    res.json({ db: 'ok', result: r.rows[0] })
  } catch (e) {
    res.status(500).json({ db: 'error', message: e.message })
  }
})

module.exports = app