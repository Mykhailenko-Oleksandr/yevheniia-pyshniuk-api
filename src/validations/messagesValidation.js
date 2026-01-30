import { Joi, Segments } from 'celebrate';

export const createMessageSchema = {
  [Segments.BODY]: Joi.object({
    userName: Joi.string().min(3).max(30).trim().required(),
    phone: Joi.string()
      .pattern(/^\+[1-9]\d{1,14}$/)
      .required(),
    comment: Joi.string().min(5).max(100).trim().required(),
  }).required(),
};
