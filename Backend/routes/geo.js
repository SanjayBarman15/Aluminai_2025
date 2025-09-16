const express = require('express');
const router = express.Router();
const geoController = require('../controllers/geoController');

// Find alumni nearby a location
router.get('/nearby', geoController.findNearbyAlumni);

// Map view of alumni
router.get('/map', geoController.getAlumniMap);

// Intelligent suggestions for connections
router.get('/suggestions', geoController.getConnectionSuggestions);

module.exports = router;
