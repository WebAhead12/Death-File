// put .. so we can go back into anime_project, then go into handlers, then home.
const homeHandler = require("../handlers/home");
const missingHandler = require("../Handlers/missing");


function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else {
    missingHandler(request, response)
  }
}


module.exports = router;