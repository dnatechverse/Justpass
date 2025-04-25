const express = require('express');
const userRouter = express.Router();

const { registerUser, getAuthData, updateUserProfile, signinUser } = require('../controllers');
const { registerRequest, signinRequest } = require('../middlewares');


// Registration route
userRouter.post('/register', registerRequest, registerUser);
userRouter.get('/register/data/:email', getAuthData);
userRouter.put('/register/update/:email', updateUserProfile);
userRouter.post('/signin', signinRequest, signinUser);

module.exports = userRouter;
