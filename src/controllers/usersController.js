import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const getCurrentUser = async (req, res) => {
  const userId = req.user?._id;

  if (!userId) {
    throw createHttpError(401, 'Unauthorized');
  }

  const user = await User.findById(userId);

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json(user);
};

export const getUserById = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  res.status(200).json(user);
};

export const getAllUsers = async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;

  if (req.user?.role !== 'Admin') {
    throw createHttpError(401, 'Only admin can get users');
  }

  const usersQuery = User.find();

  const skip = (page - 1) * perPage;

  const [totalUsers, users] = await Promise.all([
    usersQuery.clone().countDocuments(),
    usersQuery.skip(skip).limit(perPage).sort({ createdAt: 'desc' }),
  ]);

  const totalPages = Math.ceil(totalUsers / perPage);

  res.status(200).json({ page, perPage, totalUsers, totalPages, users });
};

export const updateUserAvatar = async (req, res) => {
  if (!req.file) {
    throw createHttpError(400, 'No file');
  }

  const result = await saveFileToCloudinary(req.file.buffer);

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      avatar: result.secure_url,
    },
    { new: true },
  );

  res.status(200).json({ url: user.avatar });
};
