const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('attendees');
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};

exports.rsvpEvent = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const { userId } = req.body;
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found.' });
        if (!event.attendees.includes(userId)) {
            event.attendees.push(userId);
            await event.save();
        }
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
};
