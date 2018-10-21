import * as http from "http";
const server = http.createServer((req, res) => {
  res.end("heelo Node");
});
server.listen(8000);
