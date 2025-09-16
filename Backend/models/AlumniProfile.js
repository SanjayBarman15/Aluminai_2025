const mongoose = require('mongoose');

const AlumniProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    education: String,
    batch: String,
    profession: String,
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] },
    },
    bio: String,
    socialLinks: [String],
    city: String,
    country: String,
    createdAt: { type: Date, default: Date.now }
});
AlumniProfileSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('AlumniProfile', AlumniProfileSchema);
