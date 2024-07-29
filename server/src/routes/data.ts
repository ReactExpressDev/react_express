import { Router } from 'express';
import { Pool } from 'pg';

const dataRouter = (pool: Pool): Router => {
  const router = Router();

  router.get('/', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM your_table');
      res.json(result.rows);
      client.release();
    } catch (err) {
      console.error('Database query error:', err);
      res.status(500).send('Error');
    }
  });

  return router;
};

export default dataRouter;
