const express = require('express');
const app = express();
const fs = require("fs");

var PORT = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayRoot(res);

        case "/portfolio":
            return displayPortfolio(res);

        default:
            return display404(path, res);
    }
}