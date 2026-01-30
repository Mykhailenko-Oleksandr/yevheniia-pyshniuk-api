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
