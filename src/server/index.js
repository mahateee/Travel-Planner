// Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();
// Create an instance for the server
var path = require('path')
const express = require('express')
const fetch = require("node-fetch");
const mockAPIResponse = require('./mockAPI.js');
// Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
// Configure cors to avoid cors-origin issue
const cors = require('cors');
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
console.log(`Your API key is ${process.env.API_KEY}`);
// Configure express static directory.
app.use(express.static('dist'))
app.use(express.json());
app.use(express.urlencoded());
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //  res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
const https = require('https');

let userInput = [];

const username = 'llmahal';

app.post('/add', async (req, res) => {
    const dataUrl = 'http://api.geonames.org/' + 'searchJSON?formatted=true&q=' + req.body.city_name + '&username=' + username + '&style=full';
    const response = await fetch(dataUrl)
    const data = await response.json()
    const projectData = {
        latitude: data.geonames[0].lat,
        longitude: data.geonames[0].lng,
        cityName: data.geonames[0].name,
        country: data.geonames[0].countryName,
    }
    res.send(projectData);
})

// designates what port the app will listen to for incoming requests
const server = app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


module.exports = server;