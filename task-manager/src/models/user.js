const mongoose = require('mongoose');
const validator = require('validator');


const User = mongoose.model('User', { 
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot containt "password" ')
            }
        }

    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})
// const User = mongoose.model('User', userSchema);


// const user = new User({ name: 'ELJERRY', email: 'TRIKIENALS@GMAIL.COM', age: 20, password: '123489wq'})

// user.save().then((result) => {
//   console.log(result)  
// }).catch((error) => {
//     console.error('Error!', error)
// })

module.exports = User