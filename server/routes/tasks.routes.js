import express from 'express';
import { getProjectTasks, getTask, createTask, editTask, deleteTask } from '../controllers/tasks.routes.js';
import { validateProject } from '../controllers/project.controller.js';
import { validateId, validateData } from '../controllers/helperValidation.js';
const router = express.Router();
router.get('/api/projects/:projectId/tasks', getProjectTasks);
router.get('/api/projects/:projectId/tasks/:taskId', validateId, getTask);
router.post('/api/projects/:projectId/tasks', validateData, validateId, createTask);
router.put('/api/projects/:projectId/tasks/:taskId', validateData, validateId, editTask);
router.delete('/api/projects/:projectId/tasks/:taskId', validateId, deleteTask);

export default router;
