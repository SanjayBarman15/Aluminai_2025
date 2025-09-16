const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

module.exports = (req, res, next) => {
    // Implement JWT authentication middleware
    next();
};
