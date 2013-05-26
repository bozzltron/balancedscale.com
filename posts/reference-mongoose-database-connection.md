{{{"title":"Reference the Mongoose Database Connection","tags":["node.js"],"date":"5-24-2012"}}}

Mongoose is an ODM for Node.js that connects to MongoDb.  I've found Mongoose to be really useful in handling Models and REST.  However, I ran into the need to connect directly to MongoDb rather that working through the Models.  Here's the code to reference Mongooses Db so you don't have to connect twice.

<pre>// Database
var connection = mongoose.connect('mongodb://username:password@localhost/db_name');
var db = connection.connections[0].db;
</pre>