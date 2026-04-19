const Message = require('../models/Message');

// @desc    Send a new message from Contact Form
// @route   POST /api/messages
exports.sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Please fill all required fields" });
        }

        const newMessage = await Message.create({ name, email, subject, message });
        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        res.status(500).json({ message: "Server Error: Could not send message" });
    }
};

// @desc    Get all messages for Admin
// @route   GET /api/messages
exports.getMessages = async (req, res) => {
    try {
        // Sirf admin hi dekh sakega (Auth middleware handle karega)
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching messages" });
    }
};

// @desc    Delete a message
// @route   DELETE /api/messages/:id
exports.deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Message deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting message" });
    }
};