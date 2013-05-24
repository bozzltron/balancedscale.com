
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , https = require('https')
  , path = require('path')
  , bouncy = require('bouncy')
  , hbs = require('express-hbs');

var app = express();

hbs.express3({
  extname: ".html",
  layout: "layout"
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', hbs.express3({
  partialsDir: __dirname + '/views',
  defaultLayout: __dirname + '/views/layout.html'
}));
app.set('view engine', 'html');
app.use(express.compress());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.enable('trust proxy');
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view options', {layout:true});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.set('port', 3000);

  // Setup mongo connection
  var databaseUrl = "bsm"; // "username:password@example.com/mydb"
  var collections = ["users", "posts"]
  var db = require("mongojs").connect(databaseUrl, collections); 
  app.set('mongo', db);
}

// Routeage
app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/about', routes.about);
app.get('/blog/:yearmonth/:post', routes.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

process.on('uncaughtException', function (exception) {
  console.error(exception);
});

