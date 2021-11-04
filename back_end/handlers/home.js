const fs = require("fs");
const path = require("path");
function homeHandler(request, response) {
  const filePath = path.join(__dirname, "../..", "front_end", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("Not found");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
}
module.exports = homeHandler;
