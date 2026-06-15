import express from 'express';

const router = express.Router();
router.get('/api/projects/:projectId/tasks', getProjectTasks);
router.get('/api/projects/:projectId/tasks/:taskId', getTask);
router.post('/api/projects/:projectId/tasks', createTask);
router.put('/api/projects/:projectId/tasks/:taskId', editTask);
router.delete('/api/projects/:projectId/tasks/:taskId', deleteTask);
