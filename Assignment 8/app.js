'use strict';
const express = require('express');
const app = express();

// Define the hostname and port
const hostname = '127.0.0.1';
const port = process.env.PORT || 8000;

// Define the /hello endpoint
app.get('/hello', (req, res) => {
    res.type('text/html');
    res.send('<h1>Hello, World!</h1>');
});

// Define the /math/circle/:r endpoint
app.get('/math/circle/:r', (req, res) => {
    const radius = parseFloat(req.params.r);
    if (isNaN(radius)) {
        res.status(400).send('Invalid radius');
    } else {
        const area = Math.PI * radius * radius;
        const circumference = Math.PI * 2 * radius;
        res.type('text');
        res.send(`The area of a circle with radius ${radius} is ${area} and the circumference is ${circumference}`);
    }
});

app.get('/hello/name', (req, res) => {
    const first = req.query['first'];
    const last = req.query['last'];
    if (!first && !last) {
        res.status(400).send('Missing Required GET parameters: first, last')
    } else if (!first) {
        res.status(400).send('Missing Required GET parameters: first')
    } else if(!last) {
        res.status(400).send('Missing Required GET parameters: last')
    } else {
        res.type('text');
        res.send(`Hello ${first} ${last}`);
    }
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the Express server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});