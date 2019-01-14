console.log('Notes.js ', 'Starting notes.js')

// Export variables
module.exports.age = 41;

// Export function
module.exports.addNotes = () => {

    console.log('addNote');
    return 'New Note';
}

// Export function
module.exports.add = (a,b) => a+b