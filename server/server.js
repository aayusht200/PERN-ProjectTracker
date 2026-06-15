import express, { response } from 'express';
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

//show single project
app.get('/api/projects/:id', async (req, res) => {
    const project_id = req.params;
    try {
        const query = `SELECT * FROM project WHERE id=$1;`;
        const values = [project_id.id];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

//create project
app.post('/api/projects/new', async (req, res) => {
    try {
        const { title, description, status, start_date, end_date } = req.body;
        const query = `INSERT INTO project (
  title,
  description,
  status,
  start_date,
  end_date
)
VALUES ($1, $2, $3, $4, $5);`;
        const values = [title, description, status, start_date, end_date];
        pool.query(query, values)
            .then((response) => {
                res.status(200).send({ message: 'New Project inserted sucessfully' });
            })
            .catch((err) => {
                res.status(400).send({ message: 'Insertion failed' });
                console.log(err);
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

//edit project

//delete project
app.post('/api/projects/:id', async (req, res) => {
    const project_id = req.params;
    try {
        const query = `DELETE FROM project WHERE id=$1;`;
        const values = [project_id.id];
        const result = await pool.query(query, values);
        if (result.rowCount === 1) res.status(200).json({ message: 'record deleted' });
        else {
            console.error(err);
            res.status(500).json({
                message: 'Project not found.',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

app.listen(3000, () => {
    console.log('Connection sucessful.');
});
