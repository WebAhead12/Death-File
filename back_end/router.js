// put .. so we can go back into anime_project, then go into handlers, then home.
const homeHandler = require("./handlers/home");
const missingHandler = require("./handlers/missing");
const frontEndHandler = require("./handlers/frontend");
const dataHandler = require("./handlers/data.js");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("front_end")) {
    frontEndHandler(request, response);
  } else if (url.includes("data")) {
    dataHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
