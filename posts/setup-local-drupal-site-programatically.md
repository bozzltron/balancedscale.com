{{{"title":"Setup A Local Drupal Site Programatically","tags":["Linux"],"date":"4-22-2009"}}}

<p>I've been keeping documentation on my development life cycle processes.&#160; Just recently, I realized that I could do away with a lot of these little tasks with <a title="Shell Scripts" href="http://en.wikipedia.org/wiki/Shell_scripting" target="_blank">shell scripts</a>.&#160; Here's a look at one of my "to-do lists" for setting up a Drupal site on my local Apache server.</p>
<pre> 1. Setup Database &bull; Create Database/ Grant Permission    
  &bull; mysql -u root -p       
  &bull; create database ___;       &#38;
  &bull; grant all privileges on ___.* to boz@localhost ;     

2. Add server name to host file /etc/hosts    

3. Enable site in Apache      
  &bull; Create file in /etc/apache2/sites-available 
  &bull; Add DocumentRoot and ServerName info.  If you add a custom error log, 
           make sure the directory and file exist in the file system.    
           DocumentRoot /var/www/drupal   ServerName local.______.com
  &bull; Link file to /etc/apache2/site-enabled or 'sudo a2ensite' sitename
  * sudo /etc/init.d/apache2 reload
</pre><p>Now lets look at the script.  The Ubuntu Community page for Drupal contains an <a href="https://help.ubuntu.com/community/Drupal#Install%20Script" target="_blank">installer shell script</a> that I used for as a starting point for writing this one.  Let's walk through it piece by piece.</p>
<h3>Configuration</h3>
<p>The installer script is set up to accept a bunch parameters.  I didn't want to have to type the same things over and over so I hard coded some of my system information as variables at the top. * Note: Lines starting with # are comments.</p>
<pre> # User configuration 
user=username
password=system_password 
dbpass=mysql_password 
# End User configuration 
</pre><h3>Setting up Drupal files</h3>
<p>I use a <a href="http://drupal.org/node/43816">multi-site configuration</a> in Drupal so that I don't have to have mutiple copies of Drupal core files and so that I don't have to manage more that one Drupal install.  This part of the scripts sets up the files and their permissions required by Drupal.  The variables $1 is the first argument passed to the script dynamically and refers to the site domain name.</p>
<pre>echo "Setting up local.$1"

echo "Setup required files/directories"
mkdir /home/$user/public_html/drupal/sites/$1
mkdir /home/$user/public_html/drupal/sites/$1/modules
mkdir /home/$user/public_html/drupal/sites/$1/themes
mkdir /home/$user/public_html/drupal/sites/$1/files

echo "Set permissions"
chmod -R 777 /home/$user/public_html/drupal/sites/$1/files
</pre><h3>Setup MySQL Database</h3>
<p>This section of the script sets up a database named $2 is a reference to the second argument passed to the script.</p>
<pre>echo "Create database reload mysql privileges"
mysql -uroot -p$dbpass -e "DROP DATABASE IF EXISTS $2;"
mysql -uroot -p$dbpass -e "CREATE DATABASE IF NOT EXISTS $2;"
mysql -uroot -p$dbpass -e "GRANT USAGE ON $2.* TO '$user'@'localhost' IDENTIFIED BY '$password';"
mysql -uroot -p$dbpass -e "GRANT ALL PRIVILEGES ON $2.* TO '$user'@'localhost';"
mysql -uroot -p$dbpass -e "flush privileges;"
</pre><h3>Drupal Site Settings file</h3>
<p>Adding a new site to Drupal requires a clean settings.php file, which Drupal will detect and redirect you to the install.php page once everything is set up.  I give full permission to this file so that Drupal can write to it later.</p>
<pre>echo "Config Drupal settings.php"
touch /home/$user/public_html/drupal/sites/$1/settings.php
chmod 777 /home/$user/public_html/drupal/sites/$1/settings.php
</pre><h3>Enabling the Domain to Apache</h3>
<p>This section tells Apache where to point to when the new domain is hit from the browser.  I'm just pointing it to my drupal folder.  Notice that I use "local." in front of my domain.  This is just my preference when I set up a development site.  You can use whatever domain you like.  The "a2ensite" command enables the site in Apache.</p>
<pre>echo "Set up Apache config file" 
echo "" &#62;/etc/apache2/sites-available/local.$1
echo "  DocumentRoot /var/www/drupal" &#62;&#62;/etc/apache2/sites-available/local.$1
echo "  ServerName $1" &#62;&#62;/etc/apache2/sites-available/local.$1
echo "" &#62;&#62;/etc/apache2/sites-available/local.$1

echo "Enable Apache site"
a2ensite local.$1
</pre><h3>Add Domain to your Host file</h3>
<p>All that's left to do now is to write the new domain to your host file and restart Apache.</p>
<pre>echo "Add domain to host file"
echo "127.0.0.1 local.$1" &#62;&#62;/etc/hosts

echo "Restart apache"
/etc/init.d/apache2 force-reload

echo "Done"
</pre><p>Once the script has finished executing I can pull up my browser, enter in the new domain, which pulls up the Drupal install page.  Enjoy!</p>
<p>Here's the full script!</p>
<pre># User configuration
user=
password=
dbpass=
# End User configuration

echo "Setting up local.$1"

echo "Setup required files/directories"
mkdir /home/$user/public_html/drupal/sites/$1
mkdir /home/$user/public_html/drupal/sites/$1/modules
mkdir /home/$user/public_html/drupal/sites/$1/themes
mkdir /home/$user/public_html/drupal/sites/$1/files

echo "Set permissions"
chmod -R 777 /home/$user/public_html/drupal/sites/$1/files

echo "Create database reload mysql privileges"
mysql -uroot -p$dbpass -e "DROP DATABASE IF EXISTS $2;"
mysql -uroot -p$dbpass -e "CREATE DATABASE IF NOT EXISTS $2;"
mysql -uroot -p$dbpass -e "GRANT USAGE ON $2.* TO '$user'@'localhost' IDENTIFIED BY '$password';"
mysql -uroot -p$dbpass -e "GRANT ALL PRIVILEGES ON $2.* TO '$user'@'localhost';"
mysql -uroot -p$dbpass -e "flush privileges;"

echo "Config Drupal settings.php"
#  $db_url = 'mysql://username:password@localhost/databasename';
touch /home/$user/public_html/drupal/sites/$1/settings.php
chmod 777 /home/$user/public_html/drupal/sites/$1/settings.php

echo "Set up Apache config file" 
echo "" &#62;/etc/apache2/sites-available/local.$1
echo "  DocumentRoot /var/www/drupal" &#62;&#62;/etc/apache2/sites-available/local.$1
echo "  ServerName $1" &#62;&#62;/etc/apache2/sites-available/local.$1
echo "" &#62;&#62;/etc/apache2/sites-available/local.$1

echo "Enable Apache site"
a2ensite local.$1

echo "Add domain to host file"
echo "127.0.0.1 local.$1" &#62;&#62;/etc/hosts

echo "Restart apache"
/etc/init.d/apache2 force-reload

echo "Done"
</pre>