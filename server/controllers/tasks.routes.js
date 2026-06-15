import { pool } from '../db.js';
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
    const { projectId, taskId } = res.params;
};
export const createTask = (req, res) => {};
export const editTask = (req, res) => {};
export const deleteTask = (req, res) => {};
