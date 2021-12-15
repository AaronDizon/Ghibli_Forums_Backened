const express = require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

app.use(require('morgan')('tiny'))
app.use(require('cors')())
app.use(express.json())

const models = require('./models')

//routes

const movieRoutes = require('./routes/movieRoutes')
app.use('/movies', movieRoutes)

const userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes)

app.listen(3001, () => {
    routesReport.print()
  })