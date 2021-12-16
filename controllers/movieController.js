const models = require('../models')
const movieController = {}

movieController.getMovies = async (req, res) => {
    try {

        const movies = await models.movie.findAll()
        res.json({ movies})

    }catch (err) {
        res.json(err)
    }
}

movieController.getSingleMovie = async (req, res) => {
    try {
        const movie = await models.movie.findOne({
            where: {
                id: req.params.movieId
            },
            include: models.thread

        })
        res.json({ movie })
    }catch (err) {
        res.json(err)
    }
}

movieController.getMovieThreads = async (req, res) => {
    try {
        const movie = await models.movie.findOne({
            where: {
                id: req.params.movieId
            }
        })
        const threads = await movie.getThreads( {include: models.user})

        // const threads = await movie.findAll({
        //     include: { model: thread, as: 'thread' }
        //   });
        
        res.json(threads)
    }catch (err) {
        res.json(err)
    }
}

movieController.getThreadComments = async (req, res) => {
    try {
        const thread = await models.thread.findOne({
            where: {
                id: req.params.threadId
            }
        })
        const comments = await thread.getComments( {include: models.user})
        res.json(comments)
    }catch (err) {
        res.json(err)
    }
}


module.exports = movieController