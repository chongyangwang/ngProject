"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    res.end("heelo Node");
});
server.listen(8000);
//# sourceMappingURL=hello_server.js.map