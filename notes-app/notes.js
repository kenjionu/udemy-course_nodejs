const fs = require('fs')
const chalk = require("chalk");

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    // const duplicatedNotes = notes.filter((note) => note.title === title)
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New notes added!'))
        } else {
            console.log(chalk.red.inverse('Note title taken'))
        }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) 
    
    if (note) {
        console.log(chalk.inverse('Read notes'))
        console.log(chalk.inverse(note.title))
        console.table(note);

    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
    
}

// const addNote = function (title, body){
//     const notes = loadNotes()
//     const duplicatedNotes = notes.filter(function (note) {
//         return note.title === title
//     })

    // if(duplicatedNotes.length === 0) {
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log(chalk.green.inverse('New notes added!'))
    //     } else {
    //         console.log(chalk.red.inverse('Note title taken'))
    //     }
    // }

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No, note found!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}