
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

hbs.registerHelper('numPages', function() {
    return getPageCount();
});


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
app.use( poet.middleware() );
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view options', {layout:true});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routeage
app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/about', routes.about);
app.get('/blog/:yearmonth/:post', function ( req, res ) {
    res.redirect('/blog/' + req.params.post); 
});

app.get( '/page/:page', function ( req, res ) {
  var page = req.params.page,
    lastPost = page * 10

    var pagination = '<div class="pagination"><ul>';
    var i = 1;
    while ( i <= res.app.locals.getPageCount() ) {
        if (res.app.locals.page == i) {
            pagination += '<li class="active"><a href="' + res.app.locals.pageUrl(i) + '">' + i + '</a></li>';
        }
        else {
          pagination += '<li><a href="' + res.app.locals.pageUrl(i) + '">' + i + '</a></li>';
        }
        i++;
    }
    pagination += '</ul></div>';

  res.render( 'page', {
    posts : res.app.locals.getPosts( lastPost - 10, lastPost ),
    page : page,
    pagination: pagination
  });
});

app.get( '/tags/:tag', function ( req, res ) {
  var taggedPosts = res.app.locals.postsWithTag( req.params.tag );
  if ( taggedPosts.length ) {
    res.render( 'tag', {
      posts : taggedPosts,
      tag : req.params.tag
    });
  }
});

app.get( '/tags' , function( req, res ) {
  res.render( 'tags' , { tagList : res.app.locals.tagList } );
});

function setupRss ( core ) {
  app.get('/rss', function ( req, res ) {
    var posts = core.getPosts(0, 20);
    
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

