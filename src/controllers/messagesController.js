import createHttpError from 'http-errors';
import { Message } from '../models/message.js';

export const createMessage = async (req, res) => {
  const { userName, phone, comment } = req.body;

  await Message.create({
    userName,
    phone,
    comment,
  });

  res.status(201).json({ message: 'Message send' });
};

export const getUnreadMessages = async (req, res) => {
  if (req.user?.role !== 'Admin') {
    throw createHttpError(401, 'Only admin can get messages');
  }

  const newMessagesQuery = Message.find({ isRead: false });

  const [totalMessages, messages] = await Promise.all([
    newMessagesQuery.clone().countDocuments(),
    newMessagesQuery.sort({ createdAt: -1 }),
  ]);

  res.status(200).json({ totalMessages, messages });
};

export const getAllMessages = async (req, res) => {
  if (req.user?.role !== 'Admin') {
    throw createHttpError(401, 'Only admin can get messages');
  }

  const messagesQuery = Message.find();

  const [totalMessages, messages] = await Promise.all([
    messagesQuery.clone().countDocuments(),
    messagesQuery.sort({ createdAt: -1 }),
  ]);

  res.status(200).json({ totalMessages, messages });
};

export const getByIdMessage = async (req, res) => {
  const { messageId } = req.params;

  if (req.user?.role !== 'Admin') {
    throw createHttpError(401, 'Only admin can get message');
  }

  const message = await Message.findById(messageId);

  if (!message) {
    throw createHttpError(404, 'Message not found');
  }

  res.status(200).json(message);
};

export const deleteMessage = async (req, res) => {
  const { messageId } = req.params;

  if (req.user?.role !== 'Admin') {
    throw createHttpError(401, 'Only admin can delete message');
  }

  const message = await Message.findByIdAndDelete(messageId);

  if (!message) {
    throw createHttpError(404, 'Message not found');
  }

  res.status(200).json(message);
};

export const readMessage = async (req, res) => {
  const { messageId } = req.params;

  if (req.user?.role !== 'Admin') {
    throw createHttpError(401, 'Only admin can delete message');
  }

  const message = await Message.findByIdAndUpdate(
    messageId,
    {
      isRead: true,
    },
    { new: true },
  );

  if (!message) {
    throw createHttpError(404, 'Message not found');
  }

  res.status(200).json(message);
};
