// Add validation functions for user input
module.exports = {
    validateEmail: (email) => /\S+@\S+\.\S+/.test(email),
    // Add more validators as needed
};
