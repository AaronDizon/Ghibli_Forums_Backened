const models = require('../models')
const { move } = require('../routes/movieRoutes')
const userController = {}

userController.signup = async (req, res) => {
    try{
        const user = await models.user.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
        })
        res.json(user)
    }catch (err) {
        res.json(err)
    }
}
userController.login = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: { email: req.body.email }
        })
        if(user.password === req.body.password) {
            res.json({user})
        } 
    }catch (err) {
        res.json(err)
    }
}
userController.verifyUser = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: { id: req.headers.authorization }
          })
        if (user) {
            res.json({user})
        }
    }catch (err) {
        res.json(err)
    }
}


//get all threads of a user 
userController.getUserThreads = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        const threads = await user.getThreads()

        res.json(threads)

    }catch (err) {
        res.json(err)
    }
}

//start a thread and associate it with both the movie and the user 
userController.startThread = async (req, res) => {
    try{
        const movie = await models.movie.findOne({
            where: {
                id: req.params.movieId
            }
        })
        const user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        const thread = await models.thread.create({
            description: req.body.description
        })

        await movie.addThreads(thread)
        await user.addThreads(thread)

        res.json(thread)

    }catch (err) {
        res.json(err)
    }
}

//create a comment and associate it with both the thread and user
userController.comment = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        const thread = await models.thread.findOne({
            where: {
                id: req.params.threadId
            }
        })
        const comment = await models.comment.create({
            description: req.body.description
        })
        
        await thread.addComments(comment)
        await user.addComments(comment)
        console.log(comment)
        res.json(comment)

    }catch (err) {
        res.json(err)
    }
}

//finds the user of the thread
userController.threadUser = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.threadId
            }
        })
        res.json(user)
    }catch (err) {
        res.json(err)
    }
}

//finds the user of the comment
userController.commentUser = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.commentId
            }
        })
    }catch (err) {
        res.json(err)
    }
}

module.exports = userController