import createHttpError from 'http-errors';
import { Project } from '../models/project.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

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

export const createProject = async (req, res) => {
  if (req.user.role !== 'Admin') {
    throw createHttpError(401, 'Only admin can create new projects');
  }

  if (!req.files) {
    throw createHttpError(400, 'Images is required');
  }

  const createData = { ...req.body };

  const uploadResults = await Promise.all(
    req.files.map((file) => saveFileToCloudinary(file.buffer)),
  );
  const imageUrls = uploadResults.map((result) => result.secure_url);

  const newProject = await Project.create({
    ...createData,
    images: imageUrls,
  });

  res.status(200).json(newProject);
};
