const express = require('express');
const movieRoutes = express.Router();
const movieController = require('../controllers/movieController');

//get a list of all the movies
movieRoutes.get('/', movieController.getMovies)

//get the info of a single movie
movieRoutes.get('/:movieId', movieController.getSingleMovie)

//get a list of all the threads of a movie
movieRoutes.get('/:movieId/threads', movieController.getMovieThreads)

//get a list of all the comments of a thread pertaining to a movie 
movieRoutes.get('/thread/:threadId/comments', movieController.getThreadComments)


module.exports = movieRoutes