const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    try {
        const { sender, receiver, content } = req.body;
        if (!sender || !receiver || !content) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const message = new Message({ sender, receiver, content });
        await message.save();
        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.getMessagesForUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const messages = await Message.find({ $or: [{ sender: userId }, { receiver: userId }] });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};
