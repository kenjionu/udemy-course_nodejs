const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

// fs.writeFileSync('i-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('i-json.json')
// const dataJSON = dataBuffer.toString()
// const data =JSON.parse(dataJSON)
// console.log(data.title)

// console.log(dataBuffer.toString())

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const user = JSON.parse(dataJson)

user.name = 'Gunther'
user.age = 30

const userJSON = JSON.stringify(user)
fs.writeFileSync('i-json.json', userJSON)