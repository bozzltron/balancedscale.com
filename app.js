
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , https = require('https')
  , path = require('path')
  , hbs = require('express-hbs')
  , app = express()
  , html2text = require( 'html-to-text')
  , poet = require('poet')( app );

hbs.express3({
  extname: ".html",
  layout: "layout"
});

hbs.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

hbs.registerHelper('formattedDate', function(date) {
    return (date.getMonth()+1) + "." + date.getDate() + "." + date.getFullYear();
})

hbs.registerHelper('numPages', function() {
    return getPageCount();
});

// all environments
app.use(express.bodyParser());
app.use(express.compress());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.enable('trust proxy');
app.use( poet.middleware() );
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view options', {layout:true});
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', hbs.express3({
  partialsDir: __dirname + '/views',
  defaultLayout: __dirname + '/views/layout.html'
}));
app.set('view engine', 'html');

// poet
poet.set({
  posts: './posts/',  // Directory of posts
  postsPerPage: 10,     // Posts per page in pagination
  metaFormat: 'json',  // meta formatter for posts
})
  .createPostRoute('/blog/:post')
  //.createPageRoute()
  .createTagRoute()
  //.createCategoryRoute()
  .init(function ( locals ) {
    locals.numPages = locals.getPageCount();
    setupRss(locals);
  });

app.set('poet', poet);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routeage
app.post( '/contact', routes.sendEmail );
app.get( '/', routes.index );
app.get( '/login', routes.login );
app.get( '/about', routes.about );
app.get( '/contact', routes.contact );
app.get( '/blog', routes.blog);
app.get( '/blog/:yearmonth/:post', routes.legacy );
app.get( '/page/:page', routes.page );
app.get( '/tags/:tag', routes.tag );
app.get( '/tags' , routes.tags );

function setupRss ( core ) {
  app.get('/rss', function ( req, res ) {
    var posts = core.getPosts(0, 1000);
    
    // Since the preview is automatically generated for the examples,
    // it contains markup. Strip out the markup with the html-to-text
    // module. Or you can specify your own specific rss description
    // per post
    posts.forEach(function (post) {
      post.rssDescription = html2text.fromString(post.preview);
    });

    res.render( 'rss', { posts: posts, layout:false });
  });
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

process.on('uncaughtException', function (exception) {
  console.error(exception);
});

