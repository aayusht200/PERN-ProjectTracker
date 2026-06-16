import express from 'express';
import {
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
} from '../controllers/project.controller.js';
import { validateId, validateData } from '../controllers/helperValidation.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', validateId, getProject);
router.post('/', validateData, createProject);
router.put('/:id', validateId, validateData, updateProject);
router.delete('/:id', validateId, deleteProject);

export default router;
