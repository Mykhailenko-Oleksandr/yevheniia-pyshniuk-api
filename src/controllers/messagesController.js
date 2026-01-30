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

export const getUnreadFeedbacks = async (req, res) => {
  const newMessages = await Message.find({ isRead: false }).sort({
    createdAt: -1,
  });
  res.status(200).json(newMessages);
};
