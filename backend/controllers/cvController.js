const Cv = require('../models/Cv');

// CV Get karne ke liye
exports.getCv = async (req, res) => {
    try {
        const cv = await Cv.findOne();
        res.status(200).json(cv);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CV ID Update/Upload karne ke liye
exports.uploadCv = async (req, res) => {
    try {
        const { driveId } = req.body;
        if (!driveId) return res.status(400).json({ message: "Drive ID is required" });

        let cv = await Cv.findOne();
        if (cv) {
            cv.driveId = driveId;
            await cv.save();
        } else {
            cv = await Cv.create({ driveId });
        }

        res.status(200).json({ message: "Drive ID updated successfully", cv });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};