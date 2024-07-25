const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQLプールの設定
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// サンプルデータ取得エンドポイント
app.get('/api/data', async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
