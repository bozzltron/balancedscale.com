

// var posts = require('./import.json');
// console.log(json.length + ' posts');

var fs = require('fs'),
             xml2js = require('xml2js');

var parser = new xml2js.Parser();

fs.readFile('import.xml', 'utf8', function (err, data) {
  if (err) throw err;
  parser.parseString(data, function (err, result) {
        var posts = result.node.node;
        posts.forEach(generateMarkdown);
    });
});

function generateMarkdown(post){
    var fs = require('fs')
         ,urlSegments = post.Path[0].split('/')
         ,postId = urlSegments[ urlSegments.length -1 ]
         ,text = ""
         ,filename = "../posts/" + postId +  ".md";

    var meta = JSON.stringify({
        title : post.Title[0],
        tags: post.Tags,
        date : post.Postdate[0],
        description: post.Teaser[0]
    });

    text += "{{" + meta + "}}\n\n";

    text += post.Body[0];

    // Delete existing file
    fs.unlink(filename);

    // Write new file
    fs.writeFile(filename, text, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
}

