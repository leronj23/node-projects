console.log('App.js ', 'hello world')

const fs = require('fs')
const os = require('os')

// To install a node module
// npm install lodash --save
const _ = require('lodash')
const notes = require('./notes.js')

// Check for strings
console.log(_.isString(true))
console.log(_.isString("LeRon"))

// Remove duplicates in array
var filterArray = _.uniq(['LeRon', 1, 'LeRon', 1,2,3,4])
console.log(filterArray);



// var res = notes.addNotes();
// console.log(res);

// console.log('Result: ', notes.add(9,-2))

// Create a file and save text inside the file
// var user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`)