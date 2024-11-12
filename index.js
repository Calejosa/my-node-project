const express = require('express');
const { Pool } = require('pg');  // PostgreSQL client
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'db',  // El nombre del contenedor de la base de datos (será "db" en este caso)
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Current time from DB: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
