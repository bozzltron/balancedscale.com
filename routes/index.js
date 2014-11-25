
/*
 * Main routes
 */
var nodemailer = require('nodemailer');

exports.index = function(req, res){
    var posts = res.app.locals.getPosts(0,3);

    res.render('index', {posts:posts});
};

exports.blog = function(req, res){
    var posts = res.app.locals.getPosts(0,10);

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
    res.render('blog', {posts:posts, pagination:pagination});
};

exports.post = function(req, res){

    var url = req.params.post;
    var count = 0;
    var post = posts[count];

    while(posts[count].link.indexOf(url) == -1 && count < posts.length){
        count++;
        post = posts[count];
    }
    console.log(post);

    res.render('post', post);
};

exports.login = function(req, res){
    res.render('login');
};

exports.about = function(req, res){
    res.render('about');
};

exports.tags = function( req, res ) {
  res.render( 'tags' , { tagList : res.app.locals.tagList } );
};

exports.tag = function ( req, res ) {
  var taggedPosts = res.app.locals.postsWithTag( req.params.tag );
  if ( taggedPosts.length ) {
    res.render( 'tag', {
      posts : taggedPosts,
      tag : req.params.tag
    });
  }
};

exports.legacy = function ( req, res ) {
    res.redirect('/blog/' + req.params.post); 
};

exports.page = function ( req, res ) {
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
  
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact' });
};	

exports.sendEmail = function(req, res) {

    if(typeof(req.body.from) != undefined && req.body.subject && req.body.message) {
  
        var SendGrid = require('sendgrid').SendGrid;
        var sendgrid = new SendGrid('app15875802@heroku.com', 'dclxll9e');
        sendgrid.send({
          to: 'mtbosworth@gmail.com',
          from: req.body.from,
          subject: 'Balancedscale.com : ' + req.body.subject,
          text: req.body.message
        }, function(success, message) {
          if (!success) {
            res.render('contact', {messages:[{type:"error", message:"There Was A Problem.  Try Again."}]});
            console.log(message);
          } else {
            res.render('contact', {messages:[{type:"success", message:"Your Message Was Sent.  Thank You!"}]});  
          }
        });

    } else {
        res.render('contact', {messages:[{type:"error", message:"Please fill out all of the fields!"}]});
    }
};
