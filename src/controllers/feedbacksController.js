import createHttpError from 'http-errors';
import { Feedback } from '../models/feedback.js';

export const getAllFeedbacks = async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;

  const projectsQuery = Feedback.find();

  const skip = (page - 1) * perPage;

  const [totalFeedbacks, feedbacks] = await Promise.all([
    projectsQuery.clone().countDocuments(),
    projectsQuery.skip(skip).limit(perPage).sort({ createdAt: 'asc' }),
  ]);

  const totalPages = Math.ceil(totalFeedbacks / perPage);

  res.status(200).json({
    page,
    perPage,
    totalFeedbacks,
    totalPages,
    feedbacks,
  });
};

export const getFeedbackById = async (req, res) => {
  const { feedbackId } = req.params;

  const feedback = await Feedback.findById(feedbackId);

  if (!feedback) {
    throw createHttpError(404, 'Feedback not found');
  }

  res.status(200).json(feedback);
};

export const createFeedback = async (req, res) => {
  const { createData } = req.body;

  const newFeedback = await Feedback.create({ ...createData });

  res.status(200).json(newFeedback);
};
