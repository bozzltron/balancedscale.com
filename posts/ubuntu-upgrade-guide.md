{{{"title":"An Ubuntu Upgrade Guide","tags":["Ubuntu"],"date":"10-27-2009"}}}

<p>I've found the cleanest way to upgrade Ubuntu is to do a fresh install.&#160; Here   is a list of steps that I take to upgrade.</p>
<ol>
<li> <strong>Backup Your Installed Applications<br /></strong>Unfortunately, Ubuntu does       not provide a tool to backup/restore your currently installed applications.&#160;       However, there is a way!&#160; Using dpkg you can dump a list of your installed       packages into a text file, which you can used later to reinstall them.&#160; I       found this method in the <a href="http://ubuntuforums.org/showthread.php?t=261366" target="_blank">Ubuntu forums</a>, but will repost it here from convenience.
<p> To dump a list of your installed packages into a text file run this. </p>
<pre><span>dpkg --get-selections &#62; installed-software<br /></span></pre><p>Make sure to store this file in your user directory for the next step.</p>
</li>
<li> <strong>Backup Server Configuration (optional)</strong> <em><br /> If you don't use Apache or MySQL you can skip steps <strong>3</strong>, <strong>4,       8, and 9</strong>.</em>
<p> Backup your /etc/apache2 folder. </p>
<pre>sudo tar cfzv apache_backup.tar.gz etc/apache2/
sudo mv apache_backup.tar.gz /home/username</pre><p>&#160;</p>
</li>
<li> <strong>Backup MySQL Databases (optional)</strong><br /> Dump your databases to a text file.<br /> <br />
<pre>mysqldump --all-databases -uroot -p &#62; mysql.backup.sql
sudo mv mysql.backup.sql /home/username</pre><p>&#160;</p>
</li>
<li> <strong>Backup your user directory</strong><br /> It's best practice to keep all of your files in your user directory       (/home/&#60;username&#62;/), so hopefully you won't need to to worry about much       outside of this.&#160; I've used both SBackup and Rsync for backup.&#160; Both are       available via Synaptic or apt-get.&#160; I prefer Rsync and highly recommend       install the gui package <a href="http://en.wikipedia.org/wiki/Grsync" target="_blank">Grsync</a>, which is also available via Synaptic or apt-get.&#160; I       backup to an external hard drive.&#160; <em>If you have large files, i.e. larger       than 4GB, make sure your external hard drive uses a file system that supports large       file transfers.&#160; I had to reformat my external drive because it was formatted       fat32, which only supports 4GB file transfers.
<p></p></em>You can install grsync like this. 
<pre><span>sudo apt-get install grsync </span><br /></pre><p>&#160;</p>
</li>
<li><strong>Install Ubuntu!<br /></strong>Download the latest and greatest Ubuntu     image from <a href="http://www.ubuntu.com" target="_blank">www.ubuntu.com</a>.&#160;     Burn the images to CD or to a thumbdrive and follow the installation     instructions.<br /> <strong>&#160;</strong></li>
<li><strong>Merge the backup of your user directory into your new user     directory<br /></strong>You don't want to copy everything from your previous user     directory to the new user directory just yet.&#160; Ubuntu applications store     configuration settings in your user directory, usually in directories that start with     ".".&#160; You can copy everything and risk it, but I prefer to just copy my personal     files first and restore application configuration directories as needed.&#160; You     may not need the old ones at all!
</li>
<li> <strong>Reinstall your application packages<br /></strong>First, select the       packages to install from the text file we created in step 1.<br /> <br />
<pre><span>dpkg --set-selections &#60; installed-software</span></pre><p> Now, we need to install them. </p>
<pre><span>dselect</span></pre><p>This may take some time.</p>
</li>
<li> <strong>Restore your apache configuration (optional)</strong><br /> Copy your apache backup to your new user folder and extract it.&#160; Then       overwrite your existing apache config directory with your backup.<br /> <br />
<pre><span>sudo cp -f -r apache2 /etc/apache2</span><br /></pre><p>&#160;</p>
</li>
<li>
<p><strong>Restore MySQL Databases (optional)</strong><br /> Restore the databases from the dump file that we created in</p>
<pre><span>mysql --verbose --user=XXXXXXXX --password=XXXXXXXX DB_NAME &#60; /PATH/TO/DUMPFILE.SQL</span></pre></li>
</ol>
<p>Finished!&#160;</p>
<p>&#160;</p>