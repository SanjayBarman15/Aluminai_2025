const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/', eventController.createEvent);
router.post('/:eventId/rsvp', eventController.rsvpEvent);

module.exports = router;
