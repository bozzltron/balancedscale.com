// Just a basic server setup for this site
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');

console.log(process.env.NODE_ENV);
Http.createServer(Stack(
  Creationix.log(),
  require('wheat')( __dirname + "/.." )
)).listen(process.env.NODE_ENV == 'production' ? process.env.PORT : 8080);
