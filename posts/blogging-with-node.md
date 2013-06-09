{{{
    "title":"Redesign Part 1 : Blogging with Node",
    "tags":["Site News"],
    "date":"6-8-2013",
    "description":"Redesign breakdown part 1"
}}}

The only thing that I knew to begin with was that I wanted to use node.js.  I 
wanted to build my skill using node, it would simplify keeping the site up to date, 
and perform well.

That being said, there are a lot of options when dealing with node.  The [Node 
Package Manager](https://npmjs.org/) or "npm" is an open system.  Anyone can submit modules.  This presents
a couple of good problems.  First, there are a lot of options.  Second, determining
if the module is quality, and is want you need, is on you.

### Wheat
One option that I looked at was [Wheat](https://github.com/creationix/wheat).  
Wheat is a light weight blogging engine, written by [Tim Caswell](https://twitter.com/creationix), 
a large contributor to the node community.  Wheat works by generating a blog site from
a set of markdown documents.  This is great for coders that use git on a daily basis.
However, this is not the kind of setup you want if you are building a blog for
non-coders unless you feel like teaching someone how to use source control.  
Feature-wise RSS and tagging are all there.  The templates are in HAML.  
The great thing about Wheat is that it is almost no overhead.  It was designed 
specific to its purpose.  The downside I saw is that its purpose might be too 
specific for the kind of site that I wanted to build.  Also, the project on 
github had not been updated in over a year.

### Express
[Express](http://expressjs.com/) is web application framework that is built on the popular 
[Connect](http://www.senchalabs.org/connect/) middleware.
I had a lot of familiarity with Express which meant I could start right away
without learning the nuances of a new system.  Express also gives you a lot of tools
and a very flexible system for using them.  The downside I saw with Express was
that there is a lot of overhead code.  When you evaulate a robust framework like
Express the question is to what extent your project will gain from all the tools 
that it offers.  

### Poet
I stumbled upon [Poet](http://jsantell.github.io/poet/) just doing research on 
different blogging engines for node.  It was written by [Jordan Santell](https://twitter.com/jsantell). 
Poet, at first, looked a lot like Wheat, using markdown documents to create pages.
The main difference between Poet and Wheat is that Wheat can run on its own.  Poet, it
turns out, is a nice little addon to Express, though you could easily write your
own server like Wheat does.  The good thing with Poet is that it gave me some flexibility.
It had default behavior, but it also made all its helper code available via middleware 
making the default behavior optional.

Finally, it was decision time.  Using Express alone I was going to have to store blog
posts in a datastore like MongoDB.  That made hosting a little more difficult and I 
would have to write more code and have more security risk.  With Wheat I didn't need
a datastore which made hosting easy, but I was worried that it was dated and that it 
would restrict me.  Poet, in the end, was the perfect fit.  It eliminated the need 
for datastorage, was being actively maintained, and gave me flexibility.  


