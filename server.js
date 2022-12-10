'use strict'
// Import the required modules
const https = require("https");
const fs = require("fs");
const express = require("express");
require('dotenv/config');

// Instance of express application
const app = express();
const PORT = process.env.PORT || 4100;

// Test root route with async function
app.get('/', async(req,res) => {
    res.send("Hello from NoseJS secure server!")
});

// Create a NodeJS https listener
https.createServer(
    {
        key: fs.readFileSync("./ssl/key.pem"),
        cert: fs.readFileSync("./ssl/cert.pem"),
    },
    app)
    .listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
