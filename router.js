var _ = require("underscore");

module.exports = function(app,io,m){

  /**
  * routing
  */
  //Handle route "GET /", as in "http://localhost:8080/"
  app.get("/", getIndex);
  app.get("/video", getVideo);

  //POST method to create a newline
  // app.post("/newline", postNewLine);

  /**
  * routing functions
  */
  function getIndex(request, response) {
    //Render the view called "index"
    response.render("index");
  };

  function getVideo(request, response) {
    //Render the view called "index"
    response.render("video");
  };

};
