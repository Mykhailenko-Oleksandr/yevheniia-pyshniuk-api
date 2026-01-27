import { Router } from 'express';
import { getAllProjects } from '../controllers/projectsController.js';

const router = Router();

router.get('/api/projects', getAllProjects);

export default router;
