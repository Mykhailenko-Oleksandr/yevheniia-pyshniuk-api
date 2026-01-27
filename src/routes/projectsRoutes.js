import { Router } from 'express';
import { celebrate } from 'celebrate';
import { getAllProjects } from '../controllers/projectsController.js';
import { getAllProjectsSchema } from '../validations/projectsValidation.js';

const router = Router();

router.get('/api/projects', celebrate(getAllProjectsSchema), getAllProjects);

export default router;
