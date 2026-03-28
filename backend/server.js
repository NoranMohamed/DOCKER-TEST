const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

app.use(cors());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/api/message', async (req, res) => {
  try {
    const result = await pool.query('SELECT text FROM messages LIMIT 1');
    res.json({ message: result.rows[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(3000, () => {
  console.log('Backend API running on port 3000');
});
