const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// CORSの設定
app.use(cors())

// SSL接続を必須にする設定
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

app.get('/', (req: any, res: any) => {
    res.send('Hello World!!!')
})

// サンプルのエンドポイント
app.get('/api/data', async (req: any, res: any) => {
    try {
        const client = await pool.connect()
        console.log(client)
        const result = await client.query('SELECT * FROM your_table')
        console.log(result)
        res.json(result.rows)
        client.release()
    } catch (err) {
        console.error('Database query error:', err)
        res.status(500).send('Error')
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
