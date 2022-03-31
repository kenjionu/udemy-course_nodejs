const mongoose = require('mongoose');
const validator = require('validator');


const Task = mongoose.model('Task', {
        description: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false,
            validate(value) {
                if (value = null) {
                    throw new Error('You give true or false')
                } 
            }
        }
    })
    
    module.exports = Task