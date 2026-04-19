const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new project
// @route   POST /api/projects
exports.createProject = async (req, res) => {
    console.log("--- NEW REQUEST RECEIVED ---");
    console.log("BODY:", req.body); // Check karein data aa raha hai
    console.log("FILE:", req.file); // Check karein image aa rahi hai
    try {
        const { title, desc, stack, liveLink, githubLink } = req.body;
        const imageUrl = req.file ? req.file.path : ''; 

        // Safe Parsing
        let stackArray = [];
        try {
            stackArray = stack ? JSON.parse(stack) : [];
        } catch (e) {
            stackArray = stack ? stack.split(',').map(s => s.trim()) : [];
        }

        const newProject = await Project.create({
            title,
            desc,
            stack: stackArray,
            liveLink,
            githubLink,
            image: imageUrl
        });
        res.status(201).json(newProject);
    } catch (error) {
        console.error("CREATE PROJECT ERROR:", error); // Terminal mein error dekhne ke liye
        res.status(500).json({ message: error.message });
    }
};
// @desc    Delete a project
// @route   DELETE /api/projects/:id
exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: "Project not found" });
    }
};