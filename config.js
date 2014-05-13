module.exports = function(app,express){

  // console.log('process env', process.env);

  // app.set("ipaddr", "172.16.253.83"); //Server's IP address
  app.set("port", 8080); //Server's port number
  app.set("views", __dirname + "/views"); //Specify the views folder
  app.set("view engine", "jade"); //View engine is Jade
  app.use(express.static("public", __dirname + "/public")); //Specify where the static content is
  app.use(express.bodyParser()); //Tells server to support JSON, urlencoded, and multipart requests

}