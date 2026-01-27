import { Project } from '../models/project.js';

export const getAllProjects = async (req, res) => {
  //  const {
  //    page = 1,
  //    perPage = 8,
  //    category,
  //    search,
  //    sortBy = '_id',
  //    sortOrder = 'asc',
  //  } = req.query;

  const projectsQuery = Project.find();

  //  const skip = (page - 1) * perPage;

  //  const [totalTools, tools] = await Promise.all([
  //    toolsQuery.clone().countDocuments(),
  //    toolsQuery
  //      .skip(skip)
  //      .limit(perPage)
  //      .sort({ [sortBy]: sortOrder }),
  //  ]);

  //  const totalPages = Math.ceil(totalTools / perPage);

  res.status(200).json({ projectsQuery });
};
