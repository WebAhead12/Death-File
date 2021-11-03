const http = require("http");
const router = require("./router");

const server = http.createServer(router);

server.listen(process.env.PORT || 9898, () => console.log(`Listening at http://localhost:9898`));
