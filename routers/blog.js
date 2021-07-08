const express = require('express')
const dataBlog = express.Router()
const blogController = require('../controllers/blogController')

dataBlog.post('/createblog', blogController.createBlog)
dataBlog.get('/getblog', blogController.getAllBlog)
dataBlog.get('/getBlogId/:blogID', blogController.getBlogId)
dataBlog.put('/updateBlog/:blogID', blogController.updateBlog)
dataBlog.delete('/deleteBlog/:blogID', blogController.deleteBlog)

module.exports = dataBlog