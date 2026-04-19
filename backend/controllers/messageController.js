const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    try {
        const newMessage = await Message.create(req.body);
        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(400).json({ message: "Error sending message" });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};