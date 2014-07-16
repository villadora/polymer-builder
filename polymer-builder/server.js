"use strict";

var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

module.exports = function(path, port) {
  console.log(path);
  var serve = serveStatic(path);

  // Create server
  var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
  });

  server.listen(port);
};
