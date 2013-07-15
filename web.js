var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var file = "index.html";
var buf = new Buffer(fs.readFileSync(file));

app.get('/', function(request, response) {
  buf.toString("utf-8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
