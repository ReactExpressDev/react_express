const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

app.get('/db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM your_table');
        res.json(result.rows);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

app.get('/api', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
