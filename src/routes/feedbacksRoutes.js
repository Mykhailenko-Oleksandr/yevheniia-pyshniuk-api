// import { authenticate } from '../middleware/authenticate.js';
import { Router } from 'express';
import {
  createFeedback,
  getAllFeedbacks,
  getFeedbackById,
} from '../controllers/feedbacksController.js';
import { celebrate } from 'celebrate';
import {
  createFeedbackSchema,
  feedbackIdSchema,
  getAllFeedbacksSchema,
} from '../validations/feedbacksValidation.js';

const router = Router();

router.get('/api/feedbacks', celebrate(getAllFeedbacksSchema), getAllFeedbacks);

router.get(
  '/api/feedbacks/:feedbackId',
  celebrate(feedbackIdSchema),
  getFeedbackById,
);

router.post('/api/feedbacks', celebrate(createFeedbackSchema), createFeedback);

export default router;
