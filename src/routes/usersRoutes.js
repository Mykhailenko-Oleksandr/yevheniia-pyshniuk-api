import { Router } from 'express';
import { celebrate } from 'celebrate';
import { upload } from '../middleware/multer.js';
import { authenticate } from '../middleware/authenticate.js';
import {
  getAllUsers,
  getCurrentUser,
  getUserById,
  updateUserAvatar,
  updateUserName,
  updateUserPassword,
  updateUserRole,
} from '../controllers/usersController.js';
import {
  getAllUsersSchema,
  updateNameSchema,
  updatePasswordSchema,
  updateRoleSchema,
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

router.patch(
  '/users/me/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar,
);

router.patch(
  '/users/:userId/role',
  authenticate,
  celebrate(updateRoleSchema),
  updateUserRole,
);

router.patch(
  '/users/me/name',
  authenticate,
  celebrate(updateNameSchema),
  updateUserName,
);

router.patch(
  '/users/me/password',
  authenticate,
  celebrate(updatePasswordSchema),
  updateUserPassword,
);

export default router;
