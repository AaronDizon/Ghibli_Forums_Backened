const express = require('express');
const movieRoutes = express.Router();
const movieController = require('../controllers/movieController');

//get a list of all the movies
movieRoutes.get('/', movieController.getMovies)

//get a list of a single movie
movieRoutes.get('/:movieId', movieController.getSingleMovie)

module.exports = movieRoutes