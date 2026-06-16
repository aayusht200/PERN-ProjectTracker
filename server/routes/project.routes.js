import express from 'express';
import {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    validateProject,
} from '../controllers/project.controller.js';
import { validateId } from '../controllers/helperValidation.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', validateId, getProject);
router.post('/', validateProject, createProject);
router.put('/:id', validateId, validateProject, updateProject);
router.delete('/:id', validateId, deleteProject);

export default router;
