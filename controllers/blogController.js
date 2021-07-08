const Blog = require('../models/Blog')

class blogController {
    static async createBlog(req,res,next){
        const {title, description, postCategory} = req.body
        const blog = await Blog.findOne({
            title: title,
            description: description,
            postCategory: postCategory
        })
        console.log(blog)
        if(blog) { next({name: 'BLOGEXIST'}) }
        else{
            const blogs = new Blog({
                title,
                description,
                postCategory
            });
            blogs.save()
            .then(data => {
                res.status(200).json({success : true, data})
            })
            .catch(err => {next({name : 'VALID'})})
        }
    }

    static async getAllBlog(req,res,next){
        try{
            const blog = await Blog.find()
            res.status(200).json({success : true, blog : blog})
        }
        catch (any) { next({name: 'NOT_FOUND'})}
    }

    static async getBlogId(req, res,next){
        const {blogID} = req.params
        try{
            const blog = await Blog.findById(blogID)
            res.status(200).json({success : true, data : blog})
        }
        catch (any) { next({name: 'NOT_FOUND'})}
    }

    static async updateBlog(req, res,next){
        const {blogID} = req.params
        const {title, description, postCategory} = req.body
        try{
            const newData = {title,description,postCategory}
            for(let key in newData) if(!newData[key]) delete newData[key]
            const blog = await Blog.findByIdAndUpdate(blogID,newData,{new: true})
            res.status(200).json({success : true, data : blog})
        }
        catch (e) { next({name: 'NOT_FOUND'})}
    }

    static async deleteBlog(req, res, next){
        const {blogID} = req.params
        try{
            const blog = await Blog.findByIdAndDelete(blogID)
            res.status(200).json({success : true, message : 'delete success'})
        }
        catch(e) { next({name : 'NOT_FOUND'})}
    }




}

module.exports = blogController