import express from 'express';
import { getProjectTasks, getTask, createTask, editTask, deleteTask } from '../controllers/tasks.routes.js';
const router = express.Router();
router.get('/api/projects/:projectId/tasks', getProjectTasks);
router.get('/api/projects/:projectId/tasks/:taskId', getTask);
router.post('/api/projects/:projectId/tasks', createTask);
router.put('/api/projects/:projectId/tasks/:taskId', editTask);
router.delete('/api/projects/:projectId/tasks/:taskId', deleteTask);

export default router;
