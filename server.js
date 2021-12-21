require('dotenv').config()

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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
    routesReport.print()
  })