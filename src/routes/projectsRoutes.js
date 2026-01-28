import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from '../controllers/projectsController.js';
import {
  createProjectSchema,
  getAllProjectsSchema,
  projectIdSchema,
  updateProjectSchema,
} from '../validations/projectsValidation.js';
import { authenticate } from '../middleware/authenticate.js';
import { upload } from '../middleware/multer.js';

const router = Router();

router.get('/api/projects', celebrate(getAllProjectsSchema), getAllProjects);
router.get(
  '/api/projects/:projectId',
  celebrate(projectIdSchema),
  getProjectById,
);

router.post(
  '/api/projects',
  authenticate,
  upload.array('images', 10),
  celebrate(createProjectSchema),
  createProject,
);
router.patch(
  '/api/projects/:projectId',
  authenticate,
  upload.array('images', 10),
  celebrate(updateProjectSchema),
  updateProject,
);
router.delete(
  '/api/projects/:projectId',
  authenticate,
  celebrate(projectIdSchema),
  deleteProject,
);

export default router;
