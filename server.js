// Step 3: Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// include the defined package
const fs = require('fs');


// Step 4: Creates our express server
const app = express();

//Serves static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

//Set links
app.get('/', (req, res) => {
    res.render('index.hbs');
})
app.get('/mainPage', (req, res) => {
    res.render('mainPage.hbs');
})
app.get('/archive', (req, res) => {
    res.render('archive.hbs');
})
app.get('/contact', (req, res) => {
    res.render('contactAuthorities.hbs');
})
app.get('/admin', (req, res) => {
    res.render('adminArchive.hbs');
})
app.get('/error', (req, res) => {
    res.render('[ERROR].hbs');
})




// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
