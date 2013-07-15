var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(30);

app.get('/', function(request, response) {
  buf.write(fs.readFile('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
