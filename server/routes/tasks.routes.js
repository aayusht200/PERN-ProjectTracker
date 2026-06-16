import express from 'express';
import {
    getProjectTasks,
    getTask,
    createTask,
    editTask,
    deleteTask,
    validateTask,
} from '../controllers/tasks.routes.js';
import { validateProject } from '../controllers/project.controller.js';
import { validateId } from '../controllers/helperValidation.js';
const router = express.Router();
router.get('/api/projects/:projectId/tasks', getProjectTasks);
router.get('/api/projects/:projectId/tasks/:taskId', validateId, getTask);
router.post('/api/projects/:projectId/tasks', validateTask, validateId, createTask);
router.put('/api/projects/:projectId/tasks/:taskId', validateTask, validateId, editTask);
router.delete('/api/projects/:projectId/tasks/:taskId', validateId, deleteTask);

export default router;
