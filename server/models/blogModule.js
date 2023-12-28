const { Schema, model } = require('mongoose')
const Joi = require('joi')

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const blogValid = Joi.object({
    title: Joi.string().required().max(50).min(5),
    author: Joi.string().min(5).required().max(25),
    desc: Joi.string().required().min(15)
})


const Blog = model('Blog', blogSchema)


module.exports = { Blog, blogValid }