import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const createMessageSchema = {
  [Segments.BODY]: Joi.object({
    userName: Joi.string().min(3).max(30).trim().required(),
    phone: Joi.string()
      .pattern(/^\+[1-9]\d{1,14}$/)
      .required(),
    comment: Joi.string().min(5).max(100).trim().required(),
  }).required(),
};

export const messageIdSchema = {
  [Segments.PARAMS]: Joi.object({
    messageId: Joi.string().custom(objectIdValidator).required(),
  }),
};
