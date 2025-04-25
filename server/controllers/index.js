const { getAuthData, getUserNameByEmail, registerUser, signinUser, updateUserProfile } = require('./global/Authentication');

module.exports = { 
    getAuthData,
    getUserNameByEmail,
    registerUser,
    signinUser,
    updateUserProfile
};