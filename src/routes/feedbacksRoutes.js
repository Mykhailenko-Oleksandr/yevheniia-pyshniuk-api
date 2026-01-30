import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';
import {
  createFeedback,
  deleteFeedback,
  getAllFeedbacks,
  getFeedbackById,
} from '../controllers/feedbacksController.js';
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

router.delete(
  '/api/feedbacks/:feedbackId',
  authenticate,
  celebrate(feedbackIdSchema),
  deleteFeedback,
);

export default router;
