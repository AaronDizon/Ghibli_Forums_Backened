const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController')

//create user
userRoutes.post('/signup', userController.signup)

//login user
userRoutes.post('/login', userController.login)

//verify user
userRoutes.get('/verify', userController.verifyUser)

//create thread
userRoutes.post('/:userId/thread/:movieId', userController.startThread)

//gets all threads of a user
userRoutes.get('/:userId/threads', userController.getUserThreads)

//create comment
userRoutes.post('/:userId/thread/:threadId/comment', userController.comment)


module.exports = userRoutes