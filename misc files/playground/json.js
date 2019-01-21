// var obj = {
//     name: 'LeRon' 
// }
// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// var personString = '{"name": "LeRon", "age": 41}'
// var person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)

const fs = require('fs')

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
}

// orginalNoteString
var orginalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', orginalNoteString)

var noteString = fs.readFileSync('notes.json')

//note
var note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)