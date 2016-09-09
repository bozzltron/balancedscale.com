/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)


  if(process.env.USERNAME && process.env.PASSWORD) {
  console.log("trying to create a user");
  // co(function *() {

  //   // db is just a regular Db instance from the native driver. 
  //   db = yield comongo.client.connect(process.env.MONGOLAB_URI);
  //   console.log("got db");

  //   // The same goes for collection. 
  //   var collection = yield comongo.db.collection(db, 'user');
  //   console.log("got collection");

  //   var salt = bcrypt.genSaltSync(10);
  //   console.log("salt", salt);

  //   var hash = bcrypt.hashSync(process.env.PASSWORD);
  //   console.log("hash", hash); 
    
  //   collection.insertOne({username:process.env.USERNAME, password:hash}); 

  // });

  	User.create({email:process.env.USERNAME, password:process.env.PASSWORD}).exec(function (err, records) {
  		if(err) console.log(err);
  		console.log("user", records);
  		cb();
	});

} else {
  cb();
}
};
