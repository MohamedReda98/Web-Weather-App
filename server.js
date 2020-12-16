// Setup empty JS object to act as endpoint for all routes
projectData = {};
const fetch = require('node-fetch');
// Require Express to run server and routes
/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000,
/* Spin up the server*/
    server = app.listen(port, listening);
function listening(){console.log(`running on localhost: ${port}`)}

// Post route


app.get('/update',saveData);
function saveData(req,res) {
    res.send(allData)
    console.log(allData)
}
let allData = {};
app.post('/allData',posting)
function posting(req,res){
    allData = {
        date:req.body.date,
        tempreture: req.body.tempreture,
        feelings: res.body.feelings
    }
    res.send(allData)
    console.log(allData)
}


