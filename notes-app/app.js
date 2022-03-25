const yargs = require('yargs');
const getNotes = require("./notes.js");
const notes = require("./notes.js");

/**
 * Goal: Refactor all functions
 * 
 * 1. If function is a method, use ES6 method definition syntax
 * 2. Otherwise, use most concise arrow function possible
 * 3. Test your work!
 */

// const validator = require('validator')
// const Notes = require('./notes.js')

// console.log(process.argv);

// /**
//  * challenger" append a message to notes.txt
//  * 
//  * 1. Use appendFileSync to append to the file
//  * 2. Run the script
//  * 3. Check your work by opening the file and viewing the appended text
//  * 4. Test your work!
//  */
// try {
yargs.version('1.1.0')


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//add, remove, read, list


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)

// const msg = Notes();

// console.log(msg)
// console.log(validator.isEmail('andres@example.com'))
// console.log(validator.isURL('https://mead.io'))

// const greenMsg = chalk.blue.inverse.bold('Success')
// console.log(greenMsg)

// const command = process.argv[2]

// chalk.blue.inverse.bold(process.argv)

// if (command === 'add'){
//     console.log(chalk.green.inverse.bold('Adding note!'))
// } else if (command === "remove") {
//     console.log(chalk.red.inverse.bold('Removing note'))
// }

// const add = require('./utils.js')
// const sum = add(4, -10)

// console.log(sum)

// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'My name is Andrew')
// /**
//  * challenger" append a message to notes.txt
//  * 
//  * 1. Use appendFileSync to append to the file
//  * 2. Run the script
//  * 3. Check your work by opening the file and viewing the appended text
//  */
// try {
//     fs.appendFileSync('notes.txt', ' data ha sido append')
// } catch (error) {
//     console.warn(err)
// }

//Bonus: use docs to mess around with other styles, make text bold and inversed.