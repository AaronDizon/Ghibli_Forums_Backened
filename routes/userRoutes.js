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

//gets a user from the threadId (to display username in the thread)
userRoutes.get('/:threadId', userController.threadUser)

//gets a user from the commentId (to display username of the comment)
userRoutes.get('/:commentId', userController.commentUser)

module.exports = userRoutes