const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/', messageController.sendMessage);
router.get('/:userId', messageController.getMessagesForUser);

module.exports = router;
