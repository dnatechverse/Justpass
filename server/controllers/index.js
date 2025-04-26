const { getAuthData, getUserNameByEmail, registerUser, signinUser, updateUserProfile } = require('./global/Authentication');
const { postContact, getContact, getContactByEmail, updateContact, deleteContact } = require('./global/Contact');

module.exports = { 
    getAuthData,
    getUserNameByEmail,
    registerUser,
    signinUser,
    updateUserProfile,

    postContact, getContact, getContactByEmail, updateContact, deleteContact,
};