{{{"title":"Simple Apache / MySql Backup Script","tags":["MySql"],"date":"5-22-2010","description":"<p>Here is a simple script for backing up your local server settings and databases. &#160;Replace \"/media/storage/_backup<span style=\"font-family: monospace; font-size: 16px; white-space: pre;\">\"</span> with your destination directory.</p>\n<p>&#160;</p>\n<pre>cp /etc/hosts /media/storage/_backup/hosts\ncp -r /etc/apache2/sites-available /media/storage/_backup/sites-avialable\nmysqldump -u root -psecret --all-databases &#62; /media/storage/_backup/backup.sql</pre>"}}}

<p>Here is a simple script for backing up your local server settings and databases. &#160;Replace "/media/storage/_backup<span style="font-family: monospace; font-size: 16px; white-space: pre;">"</span> with your destination directory.</p>
<p>&#160;</p>
<pre>cp /etc/hosts /media/storage/_backup/hosts
cp -r /etc/apache2/sites-available /media/storage/_backup/sites-avialable
mysqldump -u root -psecret --all-databases &#62; /media/storage/_backup/backup.sql</pre>