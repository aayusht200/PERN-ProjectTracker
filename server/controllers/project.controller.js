import { pool } from '../db.js';
import { project } from '../Query/project.queries.js';

export const getAllProjects = (req, res) => {
    pool.query(project.selectAll)
        .then((response) => {
            res.json(response.rows);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
export const getProject = (req, res) => {
    const project_id = req.params;
    const query = project.selectOne;
    const values = [project_id.id];
    pool.query(query, values)
        .then((response) => {
            if (response.rowCount === 1) res.json(response.rows);
            else res.status(404).send({ message: 'invalid id' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
export const createProject = (req, res) => {
    const { title, description, status, start_date, end_date } = req.body;
    const query = project.createNew;
    const values = [title, description, status, start_date, end_date];
    pool.query(query, values)
        .then((response) => {
            if (response.rowCount === 1) res.status(200).send({ message: 'New Project inserted sucessfully' });
            else {
                res.status(400).send({ message: 'Insertion failed' });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
export const updateProject = (req, res) => {
    const { title, description, status, start_date, end_date } = req.body;
    const { id } = req.params;
    const values = [title, description, status, start_date, end_date, id];
    pool.query(project.edit, values)
        .then((response) => {
            if (response.rowCount === 1) res.status(200).json({ message: 'record updated' });
            else {
                res.status(404).json({
                    message: 'Update failed.',
                });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
export const deleteProject = (req, res) => {
    const { id } = req.params;
    const values = [id];
    const query = project.delete;
    pool.query(query, values)
        .then((response) => {
            if (response.rowCount === 1) res.status(200).json({ message: 'record deleted' });
            else {
                res.status(404).json({
                    message: 'Project not found.',
                });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({
                message: 'Internal Server Error',
            });
        });
};
