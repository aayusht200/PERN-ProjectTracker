import { response } from 'express';
import { pool } from '../dbConnection.js';
import { tasks } from '../Query/tasks.queries.js';
export const getProjectTasks = (req, res) => {
    const { projectId } = req.params;
    const values = [projectId];
    pool.query(tasks.selectAll, values)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ message: 'Internal Server Error' });
        });
};
export const getTask = (req, res) => {
    const { projectId, taskId } = req.params;
    const values = [projectId, taskId];
    pool.query(tasks.selectOne, values)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ message: 'Internal Server Error' });
        });
};
export const createTask = (req, res) => {
    const { projectId } = req.params;
    const { title, description, status, start_date, end_date } = req.body;
    const values = [projectId, title, description, status, start_date, end_date];
    pool.query(tasks.createNew, values)
        .then((response) => {
            if (response.rowCount === 1) res.status(201).send({ message: 'insertion successful' });
            else {
                res.status(400).send({ message: 'insertion failed' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ message: 'Internal Server Error' });
        });
};
export const editTask = (req, res) => {
    const { projectId, taskId } = req.params;
    const { title, description, status, start_date, end_date } = req.body;
    const values = [title, description, status, start_date, end_date, projectId, taskId];
    pool.query(tasks.edit, values)
        .then((response) => {
            if (response.rowCount === 1) res.send({ message: 'task update successful' });
            else {
                res.status(400).send({ message: 'taskId/projectId does not exist' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ message: 'Internal Server Error' });
        });
};
export const deleteTask = (req, res) => {
    const { projectId, taskId } = req.params;
    const values = [projectId, taskId];
    pool.query(tasks.delete, values)
        .then((response) => {
            if (response.rowCount === 1) res.send({ message: 'task delete successful' });
            else {
                res.status(400).send({ message: 'taskId/projectId does not exist' });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ message: 'Internal Server Error' });
        });
};
