{{{
    "title":"Redesign Part 3 : Generating Markdown from XML",
    "tags":["Site News", "node.js"],
    "date":"7-8-2013",
    "description":"Redesign breakdown part 3"
}}}

This post belongs to a series of posts walking through the rewrite of the site.

With [Express](http://expressjs.com/) and 
[Poet](http://jsantell.github.io/poet/) now setup, it was time to migrate the content
from my existing platform into a format that Poet could digest.

### The Source
My existing site was built with Drupal 6.  Drupal distributes the data that makes
up a page across several database tables depending on what kind of content type 
you have defined and the fields that it contains.  That makes for some pretty
gnarley SQL queries to get data out.  However, there are plenty of modules that
can be installed to make that process easy for you.  I used the [Views Datasource](https://drupal.org/project/Views_Datasource)
module.  This module allowed me to create an endpoint that served my content as 
JSON or XML.  

Initially, I exported as JSON, but because a lot of my content 
contained embedded HTML, I was loosing data in the encoding / decoding process.
I found using XML and RSS in particular, I could get all the data that needed.

### The Destination
Poet processes content as markdown files with a little metadata at the top. Here
is an example from the Poet documentation:
<pre>
{{{
  "title": "Hello World!",
  "tags": ["blog", "fun"],
  "category": "javascript",
  "date": "7-5-2013"
}}}

Here goes the content that belongs to the post...
</pre>


### The Script
To bridge the gap I wrote a fairly simple node.js script to hit the RSS feed, 
parse the data, and generate an ".md" file for each article.  I used the 
[xml2js](https://npmjs.org/package/xml2js) module to do all the XML parsing.

<pre>
// Pull in dependencies
var fs = require('fs'),
             xml2js = require('xml2js');

// Setup parser
var parser = new xml2js.Parser();

// To make things easier, I saved the rss feed as an xml file
// so we read that in here.
fs.readFile('import.xml', 'utf8', function (err, data) {
  if (err) throw err;
  
  // A simple loop that iterates over all the posts and generates
  // the markdown documents
  parser.parseString(data, function (err, result) {
        var posts = result.node.node;
        posts.forEach(generateMarkdown);
    });
});

// A function to generate a markdown document based on a post
function generateMarkdown(post){
    var fs = require('fs')
         ,urlSegments = post.Path[0].split('/')
         ,postId = urlSegments[ urlSegments.length -1 ]
         ,text = ""
         ,filename = "../posts/" + postId +  ".md";

    // Generate the meta for Poet
    var meta = JSON.stringify({
        title : post.Title[0],
        tags: post.Tags,
        date : post.Postdate[0],
        description: post.Teaser[0]
    });

    text += "{{" + meta + "}}\n\n";

    text += post.Body[0];

    // Delete existing file - This is nice re-running the script
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
</pre>