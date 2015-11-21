'use strict';

// import libraries
var http = require('http');
var express = require('express');

// create an express app to serve the static files in the 'public' folder
var app = express();
app.use(express.static('public'));

// run http server
var httpServer = http.createServer(app);
var httpPort = process.env.PORT || 3000;
httpServer.listen(httpPort, function () {
    console.log('HTTP server listening at port %d', httpPort);
});
