const AlumniProfile = require('../models/AlumniProfile');

// Find alumni nearby a given location (lat, lng, radius in km)
exports.findNearbyAlumni = async (req, res) => {
    try {
        const { lat, lng, radius } = req.query;
        if (!lat || !lng || !radius) {
            return res.status(400).json({ message: 'lat, lng, and radius are required.' });
        }
        const alumni = await AlumniProfile.find({
            location: {
                $near: {
                    $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: parseFloat(radius) * 1000 // meters
                }
            }
        }).populate('user');
        res.json(alumni);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

// Map view: return all alumni with location
exports.getAlumniMap = async (req, res) => {
    try {
        const alumni = await AlumniProfile.find({}, 'location user').populate('user');
        res.json(alumni);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

// Intelligent connection suggestions based on geography
exports.getConnectionSuggestions = async (req, res) => {
    try {
        const { userId, lat, lng } = req.query;
        // Example: suggest alumni within 50km, excluding self
        const alumni = await AlumniProfile.find({
            user: { $ne: userId },
            location: {
                $near: {
                    $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: 50000 // 50km
                }
            }
        }).populate('user');
        res.json(alumni);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};
