import { Project } from '../models/project.js';

export const getAllProjects = async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;

  const projectsQuery = Project.find();

  const skip = (page - 1) * perPage;

  const [totalProjects, projects] = await Promise.all([
    projectsQuery.clone().countDocuments(),
    projectsQuery.skip(skip).limit(perPage).sort({ createdAt: 'asc' }),
  ]);

  const totalPages = Math.ceil(totalProjects / perPage);

  res.status(200).json({
    page,
    perPage,
    totalProjects,
    totalPages,
    projects,
  });
};
