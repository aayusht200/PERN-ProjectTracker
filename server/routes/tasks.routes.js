import express from 'express';
import { getProjectTasks, getTask, createTask, editTask, deleteTask } from '../controllers/tasks.routes.js';

import { validateId, validateData } from '../controllers/helperValidation.js';
const router = express.Router();
router.get('/:projectId/tasks', getProjectTasks);
router.get('/:projectId/tasks/:taskId', validateId, getTask);
router.post('/:projectId/tasks', validateData, validateId, createTask);
router.put('/:projectId/tasks/:taskId', validateData, validateId, editTask);
router.delete('/:projectId/tasks/:taskId', validateId, deleteTask);

export default router;
