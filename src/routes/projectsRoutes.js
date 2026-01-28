import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createProject,
  deleteProject,
  getAllProjects,
  updateProject,
} from '../controllers/projectsController.js';
import {
  createProjectSchema,
  deleteProjectSchema,
  getAllProjectsSchema,
  updateProjectSchema,
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
router.patch(
  '/api/project/:projectId',
  authenticate,
  upload.array('images', 10),
  celebrate(updateProjectSchema),
  updateProject,
);
router.delete(
  '/api/project/:projectId',
  authenticate,
  celebrate(deleteProjectSchema),
  deleteProject,
);

export default router;
