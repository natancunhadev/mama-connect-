const express = require('express')
const cors = require('cors')
const supabase = require('./config/supabase')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Mama Connect API is running 💛' })
})

// Teste: listar 1 registro da tabela users
app.get('/health/supabase', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, created_at')
      .limit(1)

    if (error) return res.status(500).json({ ok: false, error: error.message })
    return res.json({ ok: true, data })
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message })
  }
})

module.exports = app