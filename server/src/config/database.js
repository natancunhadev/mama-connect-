const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

pool.on('connect', () => {
  console.log(' connected to PostgreSQL')
})

pool.on('error', (err) => {
  console.error('unexpected database error', err)
})

module.exports = pool
