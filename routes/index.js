
/*
 * Main routes
 */
// var posts = require('../import.json');

// posts.forEach(function(post){
//     post.url = post.link.replace('http://balancedscale.com','');
// });

exports.index = function(req, res){
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
    res.render('index', {posts:posts, pagination:pagination});
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
