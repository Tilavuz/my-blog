const { Schema, model } = require('mongoose')
const Joi = require('joi')


const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


const adminValid = Joi.object({
    name: Joi.string().min(5).required(),
    password: Joi.string().min(8).required()
})

const Admin = model('Admin', adminSchema)


module.exports = { Admin, adminValid }