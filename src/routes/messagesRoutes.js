import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createMessage,
  deleteMessage,
  getAllMessages,
  getByIdMessage,
  getUnreadMessages,
  readMessage,
} from '../controllers/messagesController.js';
import {
  createMessageSchema,
  messageIdSchema,
} from '../validations/messagesValidation.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.post('/api/messages', celebrate(createMessageSchema), createMessage);
router.get('/api/messages/new', authenticate, getUnreadMessages);
router.get('/api/messages/all', authenticate, getAllMessages);
router.get(
  '/api/messages/all/:messageId',
  authenticate,
  celebrate(messageIdSchema),
  getByIdMessage,
);
router.delete(
  '/api/messages/all/:messageId',
  authenticate,
  celebrate(messageIdSchema),
  deleteMessage,
);
router.patch(
  '/api/messages/all/:messageId',
  authenticate,
  celebrate(messageIdSchema),
  readMessage,
);

export default router;
