const AlumniProfile = require('../models/AlumniProfile');

exports.getAllAlumni = async (req, res) => {
    try {
        const alumni = await AlumniProfile.find().populate('user');
        res.json(alumni);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.getAlumniById = async (req, res) => {
    try {
        const alumni = await AlumniProfile.findById(req.params.id).populate('user');
        if (!alumni) return res.status(404).json({ message: 'Alumni not found.' });
        res.json(alumni);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.createAlumni = async (req, res) => {
    try {
        const profile = new AlumniProfile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.updateAlumni = async (req, res) => {
    try {
        const profile = await AlumniProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!profile) return res.status(404).json({ message: 'Alumni not found.' });
        res.json(profile);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.deleteAlumni = async (req, res) => {
    try {
        const profile = await AlumniProfile.findByIdAndDelete(req.params.id);
        if (!profile) return res.status(404).json({ message: 'Alumni not found.' });
        res.json({ message: 'Alumni deleted.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};
