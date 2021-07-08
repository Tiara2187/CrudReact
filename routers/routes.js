const express = require('express')
const route = express.Router()
const blogRoutes = require('./blog')

const errorHandlers = require('../helpers/errorHandlers')
route.use('/content', blogRoutes)
route.use(errorHandlers)

module.exports = route