{{{"title":"Environment Based Database Selection In Drupal","tags":["Drupal"],"date":"3-15-2010"}}}

<p>I needed to find a way to have only one settings.php file maintain my database configurations across both my local development and environment and my production server.  Here is my solution.  Is there a better way?</p>
<p>&#160;</p>
<pre>if($_SERVER['SERVER_NAME'] == "local.mydomain.com"){
  $db_url = 'mysql://username:password@localhost/databasename';
}
else{
  $db_url = 'mysql://username:password@production/databasename';
}
</pre>