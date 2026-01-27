import { Joi, Segments } from 'celebrate';
// import { isValidObjectId } from 'mongoose';

// const objectIdValidator = (value, helpers) => {
//   return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
// };

export const getAllProjectsSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
  }),
};

export const createProjectSchema = {
  [Segments.BODY]: Joi.object({
    en: Joi.object({
      title: Joi.string().min(3).max(50).trim().required(),
      description: Joi.string().min(10).max(400).trim().required(),
    }).required(),
    uk: Joi.object({
      title: Joi.string().min(3).max(50).trim().required(),
      description: Joi.string().min(10).max(400).trim().required(),
    }).required(),
  }),
};

// export const noteIdSchema = {
//   [Segments.PARAMS]: Joi.object({
//     noteId: Joi.string().custom(objectIdValidator).required(),
//   }),
// };
