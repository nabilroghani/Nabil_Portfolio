const Tool = require('../models/Tool');

exports.getTools = async (req, res) => {
    try {
        const tools = await Tool.find();
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addTool = async (req, res) => {
    try {
        const newTool = await Tool.create(req.body);
        res.status(201).json(newTool);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTool = async (req, res) => {
    try {
        await Tool.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tool deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};