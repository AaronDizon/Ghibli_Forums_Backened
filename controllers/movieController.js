const models = require('../models')
const movieController = {}

movieController.getMovies = async (req, res) => {
    try {

        const movies = await models.movie.findAll()
        res.json({ movies})

    }catch (err) {
        console.log(err)
    }
}

movieController.getSingleMovie = async (req, res) => {
    try {
        const movie = await models.movie.findOne({
            where: {
                id: req.params.movieId
            }
        })
        res.json({ movie })
    }catch (err) {
        console.log(err)
    }
}


module.exports = movieController