Title: Welcome to HowToNode.org
Author: Michael Bosworth
Date: Tue Feb 02 2010 10:16:51 GMT-0600 (CST)
Node: v0.1.102

**How To Node** is a blog featuring projects and tutorials relating to the Node.js project.

This article will describe how the blog works.  Teach a few node concepts and describe how to contribute new articles for others to enjoy.

## Sample App - The node-blog engine. ##

**UPDATE** - This site now runs on another engine, but this article is still good as a general introduction to node.

This entire site is hosted by an nginx server as static html files.  That's right, you can hit refresh as many times as you want and my node code won't know about it.  Think about it as super page caching.

So where does node come in?  Well there is a small node app running on a high port listening for POST hooks from github.  Every time someone pushes changes to the repository that represents the source of this site, the running node app will regenerate all the static files.

For full source-code to the engine please reference the [node-blog][] page at github.

For the source to the articles and actual content, see the repository for [howtonode.org][]

### Node is different ###
