
/*
 * Main routes
 */
var posts = require('../import.json');

posts.forEach(function(post){
    post.url = post.link.replace('http://balancedscale.com','');
});

exports.index = function(req, res){
    res.render('index', {posts:posts});
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
