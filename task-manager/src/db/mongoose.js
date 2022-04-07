const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    /* Not neccesary*/    
    // useNewUrlParser: true,
    // useCreateIndex: true
}).then(() => console.log('conectado'))
.catch(e => console.error(e))


// var Schema = mongoose.Schema;

// const userSchema = new mongoose.Schema({ 
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot containt "password" ')
//             }
//         }

//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if (value < 0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })
// const User = mongoose.model('User', userSchema);


// const user = new User({ name: 'ELJERRY', email: 'TRIKIENALS@GMAIL.COM', age: 20, password: '123489wq'})

// user.save().then((result) => {
//   console.log(result)  
// }).catch((error) => {
//     console.error('Error!', error)
// })


// var Schema = mongoose.Schema;
// const taskSchema = new mongoose.Schema({
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         required: true,
//         default: false,
//         validate(value) {
//             if (value = null) {
//                 throw new Error('You give true or false')
//             } 
//         }
//     }
// })

// const Task = mongoose.model('Task', taskSchema)

// const task = new Task({description: 'Go to take a shower'})

// task.save().then((result)=> {
//     console.log(result)
// }).catch((error)=> {
//     console.error('Error!', error)
// })