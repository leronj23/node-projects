const express = require('express');
const hbs = require('hbs');
const fs = require('fs')

var app = express();

// Use to import other files
hbs.registerPartials(__dirname + '/views/partials')

// 'views' folder is the default directory for templates that express uses
app.set('view engine', 'hbs');

// Send Function using registerHelper
hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('screenIt', (text) => {
    return text.toUpperCase();
})

//MiddleWare - App.use is used to register MiddleWare
// Goto a directory folder
app.use(express.static(__dirname + '/public'))

// Next is used to tell Express when the MiddleWare is done.
app.use((request, response, next) => {

    var now = new Date().toString();
    var log = `${now}: ${request.method} ${request.url}`

    console.log(log)

    fs.appendFile('server.log', log + '\n', (error) => {
        if (error) {
            console.log('Unable to append to server log.')
        }
    })

    next();
})

// Anything under this page with Next() will not render
// App.use is call in the order that its placed
app.use((request, response, next) => {

    response.render('maintenance.hbs', {
        pageTitle: "Maintenance Page",
    })
})


// Root page
app.get('/', (request, response) => {

    response.render('index.hbs', {
        pageTitle: "Home Page",
        bodyTitle: "A message to myself.",
        bodyMessage: "I have no plan 'B'. I have to make this coding thing work. My life depends on it."

        // No longer needed because of the function above
        //currentYear: new Date().getFullYear()
    })
    // Body data / Get the response
    //response.send('<h1>Hello Request</h1>');

    // Send Objects
    // response.send({
    //     name: "LeRon",
    //     likes: [
    //         "coding",
    //         "weight Lifting"
    //     ]
    // })
})

// About page
app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: "About Page",
        bodyTitle: "A message to everyone."

        // No longer needed because of the function above
        //currentYear: new Date().getFullYear()
    })
    //response.send('About Page')
})

// About page
app.get('/maintenance', (request, response) => {
    response.render('maintenance.hbs', {
        pageTitle: "Maintenance Page",
        bodyTitle: "Website down for maintenance. Will be back up soon."

        // No longer needed because of the function above
        //currentYear: new Date().getFullYear()
    })
    //response.send('About Page')
})

// bad page
app.get('/bad', (request, response) => {

    response.send({
        errorMessage: "this shit is not working!"
    })
})
// Bind the application to a port
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})