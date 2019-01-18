console.log('Notes.js ', 'Starting notes.js')

const fs = require('fs');

var fectchNotes = () => {

    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    }
    catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    //console.log('Adding note', title, body)
    var notes = fectchNotes();
    var note = {
        title: title,
        body: body
    }
    var duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note;
    }
}

var getAll = () => {
    //console.log('Getting all notes')
    return fectchNotes();
}

var getNote = (title) => {
    //console.log('Getting note', title)
    var notes = fectchNotes();
    var filteredNotes = notes.filter((note) => note.title === title)
    return filteredNotes[0]
}

var removeNote = (title) => {
    //console.log('Remove note', title)
    // fetch notes
    var notes = fectchNotes();
    // filter notes, remove the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title)
    // save new notes array
    saveNotes(filteredNotes)

    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('---')
    console.log(`Title: ${note.title}` )
    console.log(`Body: ${note.body}` )
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}