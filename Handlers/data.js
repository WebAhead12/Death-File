const fs = require("fs");
const path = require("path");
const dataObject = require("../back_end/dataObject");

function dataHandler(request, respond) {
  const filePath = path.join(__dirname, "..", "back_end", "dataObject.js");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Does not exist</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/application.json" });
    }
  });
}
module.exports = dataHandler;
