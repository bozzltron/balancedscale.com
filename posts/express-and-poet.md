{{{
    "title":"Redesign Part 2 : Setting Up Express and Poet",
    "tags":["Site News", "node.js"],
    "date":"6-9-2013",
    "description":"Redesign breakdown part 2"
}}}

This post belongs to a series of posts walking through the rewrite of the site.

After the decision was made to go with [Express](http://expressjs.com/) and 
[Poet](http://jsantell.github.io/poet/), the next step was setting
up the initial project.

Express has a great [getting started guide](http://expressjs.com/guide.html) so 
I'll spare the redundancy.  Here is a walk through of my initial Express app.

### Dependencies
I am pulling in the http and path API's provided by node.  The modules
I installed from [npm](https://npmjs.org/) include express, express-hbs, html-to-text, and poet.  The 
routes variable is pulling my url defintions for express.
<pre>
    // Express
var express = require('express')   
  , routes = require('./routes')   
  , http = require('http')    
  , path = require('path')   
  , hbs = require('express-hbs') 
  , app = express()         
  , html2text = require( 'html-to-text') 
  , poet = require('poet')( app ); 
</pre>

### Handlebars Helpers
I prefer the Handlebars templating engine over Jade.  Express Handlebars integration
is provided by the express-hbs package on npm.  Here I configure handlebars to 
look for template files with an ".html" extentsion and to use "layout.html" as 
a the base template.
<pre>
hbs.express3({
  extname: ".html",
  layout: "layout"
});

hbs.registerHelper('formattedDate', function(date) {
    return (date.getMonth()+1) + "." + date.getDate() + "." + date.getFullYear();
});
</pre>

### Express Configuration
This is my Express configuration.  Most of these options are a part of Express.
The main things to note here are <code>app.use( poet.middleware() );</code> which
includes the poet middleware and using handlebars as the <code>app.engine</code>
<pre>
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
</pre>

### Poet Config
Poet routing gives you the option to use its default routes or define custom 
ones.  I overroad a lot of the defaults to support my existing post urls.  Note
that in the init function I call setupRss.  This generates the RSS feed.
<pre>
// poet
poet.set({
  posts: './posts/',  // Directory of posts
  postsPerPage: 10,     // Posts per page in pagination
  metaFormat: 'json',  // meta formatter for posts
}).createPostRoute('/blog/:post')
  .createTagRoute()
  .init(function ( locals ) {
    locals.numPages = locals.getPageCount();
    setupRss(locals);
  });

app.set('poet', poet);
</pre>

### Routes
These are my the routes I set up.  Most of them are blog related includes paging,
tag navigation, the home page, and the post page.  On top of that, I added an about
page and a contact page.
<pre>
// Routeage
app.post( '/contact', routes.sendEmail );
app.get( '/', routes.index );
app.get( '/about', routes.about );
app.get( '/contact', routes.contact );
app.get( '/blog/:yearmonth/:post', routes.legacy );
app.get( '/page/:page', routes.page );
app.get( '/tags/:tag', routes.tag );
app.get( '/tags' , routes.tags );
</pre>

### RSS
This code was taken from one of the many examples provided by Poet.  Notice
html-to-text is used here to format that the content for the feed.
<pre>
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
</pre>

### Server
Now after all the configuration we startup the server.  We use a variable port 
to accomodate hosting, i.e. the host can assign the node process to any port it 
wants.  Lastly, we have a catch all expection handler.  Node can be volital during
development.  This prevents the node process from crashing and reports the error in
your logs.
<pre>
// Start up the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// Catch all to prevent exceptions from crashing the app
process.on('uncaughtException', function (exception) {
  console.error(exception);
});
</pre>

There you go. Express is all setup and ready for content.  We will handle that 
in the next post.



