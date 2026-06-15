import express from 'express';
import { pool } from './db.js';
const app = express();
app.use(express.json());

//show all project/homepage
app.get('/api/projects', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM project;');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
//create project

//show single project

//edit project

//delete project
app.listen(3000, () => {
    console.log('Connection sucessful.');
});
