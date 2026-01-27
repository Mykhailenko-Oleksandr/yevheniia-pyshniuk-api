import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createProject,
  getAllProjects,
} from '../controllers/projectsController.js';
import {
  createProjectSchema,
  getAllProjectsSchema,
} from '../validations/projectsValidation.js';
import { authenticate } from '../middleware/authenticate.js';
import { upload } from '../middleware/multer.js';

const router = Router();

router.get('/api/projects', celebrate(getAllProjectsSchema), getAllProjects);
router.post(
  '/api/project',
  authenticate,
  upload.array('images', 10),
  celebrate(createProjectSchema),
  createProject,
);

export default router;
