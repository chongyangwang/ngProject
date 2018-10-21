"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (req, res) {
    res.end("heelo Node");
});
server.listen(8000);
