{{{"title":"SAML on Node.js","tags":["node.js"],"date":"6-1-2012","description":"One of the requirements for my current project is SAML auth via onelogin.com on node.js.  After some research, I found that there is little if any SAML projects out there.  I didn't find any although there are several generic auth modules.  So I took the PHP toolkit from onelogin and translated it to node api code.  I plan on releasing a common js module on github soon so that the community can help finish the code.  At this point the SAML response is parsed only for the users id, then I look them up in mongo and give them a session."}}}

One of the requirements for my current project is SAML auth via onelogin.com on node.js.  After some research, I found that there is little if any SAML projects out there.  I didn't find any although there are several generic auth modules.  So I took the PHP toolkit from onelogin and translated it to node api code.  I plan on releasing a common js module on github soon so that the community can help finish the code.  At this point the SAML response is parsed only for the users id, then I look them up in mongo and give them a session.  I need to add code to verify the certification and timestamp.

<pre>

// Define SAML routes

function routes(app, db) {
    
  // Receive the SAML Response here
  app.post('/saml/consume', function(req, res){
    
    var libxmljs = require("libxmljs");
    
    var samlResponse = req.body.SAMLResponse;
    
    var xml = new Buffer(samlResponse, 'base64').toString('ascii');
    
    var xmlDoc = libxmljs.parseXmlString(xml);
    var idNode = xmlDoc.get('/samlp:Response/saml:Assertion/saml:Subject/saml:NameID', {
      'samlp':'urn:oasis:names:tc:SAML:2.0:protocol',
      'saml' : 'urn:oasis:names:tc:SAML:2.0:assertion'
    });
    
    var email = idNode.text();
    
    app.settings.models.User.findOne({email:email}, function(err, user){
      
      if (user) {
        req.session.currentUser = user;
        req.flash('info', 'You are logged in as ' + email);
        res.redirect('/');
        return;
      } else {
        req.flash('error', 'Your account did not match any of our records.');
        res.redirect('/login');
        return;
      }
    });    
    
  });
  

  // Use this psuedo class to initiate the SAML Request
  var SAML = {
    
    startAuth: function(res) {
      var chars = "abcdef0123456789";
      var chars_len = chars.length;
      var uniqueID = "";
      for (var i = 0; i &#60; 20; i++) {
         uniqueID += chars.substr(Math.floor((Math.random()*15)), 1);
      }
   
      var id = "_" + uniqueID;
 
      var date = new Date();
      
      var issue_instant = date.getUTCFullYear() + '-' + ('0' + (date.getUTCMonth()+1)).slice(-2) + '-' + ('0' + date.getUTCDate()).slice(-2) + 'T' + ('0' + (date.getUTCHours()+2)).slice(-2) + ":" + ('0' + date.getUTCMinutes()).slice(-2) + ":" + ('0' + date.getUTCSeconds()).slice(-2) + "Z";
     
      var const_assertion_consumer_service_url = '/admin/saml/consume';
      var const_issuer = "onelogin_saml";
      var const_name_identifier_format = "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress";
      var request =
   &#34;&#60;samlp:AuthnRequest xmlns:samlp=\&#34;urn:oasis:names:tc:SAML:2.0:protocol\&#34; ID=\&#34;&#34; + id + &#34;\&#34; Version=\&#34;2.0\&#34; IssueInstant=\&#34;&#34; + issue_instant + &#34;\&#34; ProtocolBinding=\&#34;urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\&#34; AssertionConsumerServiceURL=\&#34;&#34; + const_assertion_consumer_service_url + &#34;\&#34;&#62;&#34; +
         &#34;&#60;saml:Issuer xmlns:saml=\&#34;urn:oasis:names:tc:SAML:2.0:assertion\&#34;&#62;&#34; + const_issuer + &#34;&#60;/saml:Issuer&#62;\n&#34; +
         &#34;&#60;samlp:NameIDPolicy xmlns:samlp=\&#34;urn:oasis:names:tc:SAML:2.0:protocol\&#34; Format=\&#34;&#34; + const_name_identifier_format + &#34;\&#34; AllowCreate=\&#34;true\&#34;&#62;&#60;/samlp:NameIDPolicy&#62;\n&#34; +
         &#34;&#60;samlp:RequestedAuthnContext xmlns:samlp=\&#34;urn:oasis:names:tc:SAML:2.0:protocol\&#34; Comparison=\&#34;exact\&#34;&#62;&#34; +
         &#34;&#60;saml:AuthnContextClassRef xmlns:saml=\&#34;urn:oasis:names:tc:SAML:2.0:assertion\&#34;&#62;urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport&#60;/saml:AuthnContextClassRef&#62;&#60;/samlp:RequestedAuthnContext&#62;\n&#34; +
         &#34;&#60;/samlp:AuthnRequest&#62;&#34;;
         
      var zlib = require('zlib');

      zlib.deflateRaw(request, function(err, buffer) {
        if (!err) {
          
          var deflated_request = buffer;
              
          var base64_request   = deflated_request.toString('base64');
    
          var encoded_request  = encodeURIComponent(base64_request);
          
          // Get api key
          db.collection('variables', function(err, collection){
            collection.findOne({name:'onelogin'}, function(err, doc){
              
              var path = doc.saml + "?SAMLRequest=" + encoded_request;
              res.redirect(path);
              
            });    
          });          
          
        }
      });

    }
  
  };
  
  app.get('/saml/start', function(req,res){
    SAML.startAuth(res);
  });  
  
  app.set('saml', SAML);
  
} 

module.exports = routes;
</pre>

<p>Usage:</p>

Add this to server.js
<pre>
// Routes
require('./apps/saml/saml')(app, db);
</pre>

Now you can secure your site like this:
*Note : I am using express framework
<pre>

  function secure(req,res,next){
        
    // Check session
    if(req.session.currentUser){
      next();
    }else{
      app.settings.saml.startAuth(res);
    }
  }
  
  app.all('/', secure);
</pre>