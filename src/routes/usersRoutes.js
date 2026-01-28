import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { celebrate } from 'celebrate';
import {
  getAllUsers,
  getCurrentUser,
  getUserById,
} from '../controllers/usersController.js';
import {
  getAllUsersSchema,
  userIdSchema,
} from '../validations/usersValidation.js';

const router = Router();

router.get(
  '/api/users',
  authenticate,
  celebrate(getAllUsersSchema),
  getAllUsers,
);
router.get('/api/users/me', authenticate, getCurrentUser);
router.get('/api/users/:userId', celebrate(userIdSchema), getUserById);

export default router;
