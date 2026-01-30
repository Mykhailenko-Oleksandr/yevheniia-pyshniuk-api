import { Router } from 'express';
import { celebrate } from 'celebrate';
import { createMessage } from '../controllers/messagesController.js';
import { createMessageSchema } from '../validations/messagesValidation.js';

const router = Router();

router.post('/api/messages', celebrate(createMessageSchema), createMessage);

export default router;
