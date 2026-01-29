import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const userIdSchema = {
  [Segments.PARAMS]: Joi.object({
    userId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const getAllUsersSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
  }),
};

export const updateRoleSchema = {
  [Segments.PARAMS]: Joi.object({
    userId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    role: Joi.string().valid('Admin', 'Guest').required(),
  }).required(),
};

export const updateNameSchema = {
  [Segments.BODY]: Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
  }).required(),
};

export const updatePasswordSchema = {
  [Segments.BODY]: Joi.object({
    oldPassword: Joi.string().min(8).max(100).required(),
    newPassword: Joi.string().min(8).max(100).required(),
  }).required(),
};
