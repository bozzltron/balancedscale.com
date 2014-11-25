{{{"title":"Remote Drush","tags":["Drupal"],"date":"8-19-2010","description":"I finally sat down to understand a <a href=\"http://www.lullabot.com/articles/new-features-drush-3\">recent post by lullabot</a> on Drush 3 remote capabilities.  Its taken me a couple of hours to set up, but this will save me hours in drupal updates.  Thank you drush project!\n\nMy hangs were on setting up the ssh key, which I omitted at first and then realized that it was a requirement for drush.  The second hangup I had was to make sure my *.aliases.drushrc.php files were wrapped in &#60;?php ?&#62; tags.  Hopefully that helps some one else."}}}

I finally sat down to understand a <a href="http://www.lullabot.com/articles/new-features-drush-3">recent post by lullabot</a> on Drush 3 remote capabilities.  Its taken me a couple of hours to set up, but this will save me hours in drupal updates.  Thank you drush project!

My hangs were on setting up the ssh key, which I omitted at first and then realized that it was a requirement for drush.  The second hangup I had was to make sure my *.aliases.drushrc.php files were wrapped in &#60;?php ?&#62; tags.  Hopefully that helps some one else.

Here's an example of one of the connections I set up with my remote host.
<pre>
$aliases['mysite.com'] = array(
  'uri' =&#62; 'mysite.com',
  'root' =&#62; '/path/to/drupal',
  'remote-host' =&#62; 'myhost.com',
  'remote-user' =&#62; 'ssh_username',
  'path-aliases' =&#62; array(
    '%drush' =&#62; '/path/to/drush/folder/on/server', // ~/drush
    '%drush-script' =&#62; '/path/to/drush/script/on/folder',  //~/drush/drush
  ), 
);
</pre>