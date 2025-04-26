const { registerRequest, signinRequest } = require('./global/Authentication');
const { ContactRequest } = require('./global/Contact');

module.exports = {
    registerRequest,
    signinRequest,

    ContactRequest,
}