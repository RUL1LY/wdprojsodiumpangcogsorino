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
app.use(express.json());

//Set data directories
const archives = JSON.parse(fs.readFileSync('data/archives.json', 'utf8'));
const adminArchives = JSON.parse(fs.readFileSync('data/adminArchives.json', 'utf8'));
const usersFilePath = path.join(__dirname, 'data', 'shown.json');

app.get('/data', (req, res) => {
    res.sendFile(usersFilePath);
})

app.post('/send', (req, res) => { 
    console.log('Received data:', req.body); // Log the received data to the console
    const newData = req.body;
    console.log(newData); // Log the new data to the console
    fs.writeFile(usersFilePath, JSON.stringify(newData, null, 2), (err) => {    
        if (err) { //starting here
            console.error('Error writing file:', err);
            res.status(500).send('Error writing file');
        } else {
            console.log('File written successfully');
            res.status(200).send('File written successfully');
        } //  to here, autofill by visual studio. sends error type
    })
})
//Set links
app.get('/', (req, res) => {
    res.render('index.hbs');
})

app.get('/mainPage', (req, res) => {
    const obj = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

    let messages1 = obj.messages1;
    let messages2 = obj.messages2;
    let messages3 = obj.messages3;
    let messages4 = obj.messages4;
    let messages5 = obj.messages5;

    res.render("mainPage.hbs", { messages1, messages2, messages3, messages4, messages5 });
})
app.get('/archive', (req, res) => {
    res.render('archive.hbs', { archives });
})
app.get('/admin', (req, res) => {
    res.render('adminArchives.hbs', { adminArchives });
})
app.get('/contact', (req, res) => {
    res.render('contactAuthorities.hbs');
})
app.get('/error', (req, res) => {
    res.render('[ERROR].hbs');
})





// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
