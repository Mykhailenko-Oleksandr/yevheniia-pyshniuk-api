import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const getAllFeedbacksSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
  }),
};

export const feedbackIdSchema = {
  [Segments.PARAMS]: Joi.object({
    feedbackId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createFeedbackSchema = {
  [Segments.BODY]: Joi.object({
    userName: Joi.string().min(3).max(30).trim().required(),
    comment: Joi.string().min(10).max(100).trim().required(),
    rating: Joi.number().min(1).max(5).integer().required(),
  }).required(),
};
