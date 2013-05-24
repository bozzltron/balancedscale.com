var http = require('http');

exports.nitro = function(req,res){

  var options = {
    // host to forward to
    host:   '0.0.0.0',
    // port to forward to
    port:   1234,
    // path to forward to
    path:   '/',
    // request method
    method: req.method,
    // headers to send
    headers: req.headers
  };

  var creq = http.request(options, function(cres) {

    // set encoding
    cres.setEncoding('utf8');

    // wait for data
    cres.on('data', function(chunk){
      res.write(chunk);
    });

    cres.on('close', function(){
      // closed, let's end client request as well 
      res.writeHead(cres.statusCode);
      res.end();
    });

  }).on('error', function(e) {
    // we got an error, return 500 error to client and log error
    console.log(e.message);
    res.writeHead(500);
    res.end();
  });

  creq.end();
};