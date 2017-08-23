'use strict';

const express = require('express');
const fs = require('fs');
const http = require('http');

// Constants
const PORT = 8091;
const HTTPPORT = 8090;
const HOST = '0.0.0.0';

var tagline = " -NodeJS Sample App Deployed Through Spinnaker"
var version = fs.readFileSync('/home/nodeJSApp/version.txt', "utf8");

// App - api
const app = express();
app.get('/', (req, res) => {
  res.send('Hello! ' + tagline + '\nVersion: ' + version);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

//html
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<br>' + '<br>');
    res.write(" Hello!" + '<br>' + tagline + '<br>' + '<br>');
    res.write("  Version: " + version + '<br>')
    res.write(" Date / Time: " + Date());
    res.end();
}).listen(`${HTTPPORT}`);
