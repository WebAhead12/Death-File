const fs = require("fs");
const path = require("path");
const dataObject = require("../back_end/dataObject.js");
const AUTOCOMPLETE_LENGTH = 8;
function dataHandler(request, response) {
  console.log(request.url);
  const url = request.url;
  const urlArray = url.split("/");
  const value = urlArray[2];
  const filterArray = [];
  dataObject.forEach((element) => {
    if (element["name"].toLowerCase().indexOf(value.toLowerCase()) === 0) filterArray.push(element["name"]);
  });
  console.log(filterArray);
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(filterArray.splice(0, Math.min(AUTOCOMPLETE_LENGTH, filterArray.length))));
}
module.exports = dataHandler;
