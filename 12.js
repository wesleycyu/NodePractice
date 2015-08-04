var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res){
  console.log(req)
});

var port = process.argv[2];

server.listen(port);