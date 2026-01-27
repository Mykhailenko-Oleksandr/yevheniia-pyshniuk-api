import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const getAllProjectsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
  }),
};

// export const createNoteSchema = {
//   [Segments.BODY]: Joi.object({
//     title: Joi.string().min(1).required(),
//     content: Joi.string().allow(''),
//     tag: Joi.string().valid(...TAGS),
//   }),
// };

// export const noteIdSchema = {
//   [Segments.PARAMS]: Joi.object({
//     noteId: Joi.string().custom(objectIdValidator).required(),
//   }),
// };
