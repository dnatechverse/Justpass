const express = require('express');
const userRouter = express.Router();

const { registerRequest, signinRequest } = require('../middlewares/global/Authentication');
const { registerUser, signinUser, getUserNameByEmail, getAuthData, updateUserProfile } = require('../controllers/global/Authentication');
const { NumberVerification } = require('../controllers');

// Registration route
userRouter.post('/register', registerRequest, registerUser);
userRouter.get('/register/data/:email', getAuthData);
userRouter.put('/register/update/:email', updateUserProfile);
userRouter.post('/signin', signinRequest, signinUser);

userRouter.post('/phone/send-otp', NumberVerification);



module.exports = userRouter;
