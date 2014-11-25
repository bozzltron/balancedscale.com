{{{"title":"Quicker SSH sessions with Console and Gnome Do","tags":["Linux"],"date":"4-27-2009","description":"<p>Using <a href=\"http://en.wikipedia.org/wiki/Ssh\" target=\"_blank\">SSH</a> is quick to manage your webspace.&#160; It is much faster that FTP depending on the task.&#160; I learned today that in Linux you can store your SSH connection in a the file \"~/.ssh/config\" using the following format.</p>\n<pre>Host myhost1\nUser username1\nPort 8322\nHostName machine.example1.com \n</pre><p>Once you've edited and saved this file with your SSH configuration settings you can start ssh sessions from the command like so.</p>"}}}

<p>Using <a href="http://en.wikipedia.org/wiki/Ssh" target="_blank">SSH</a> is quick to manage your webspace.&#160; It is much faster that FTP depending on the task.&#160; I learned today that in Linux you can store your SSH connection in a the file "~/.ssh/config" using the following format.</p>
<pre>Host myhost1
User username1
Port 8322
HostName machine.example1.com 
</pre><p>Once you've edited and saved this file with your SSH configuration settings you can start ssh sessions from the command like so.</p>
<pre>ssh myhost1</pre><p>On top of that I found that Gnome Do, one of my favorite Linux apps, parses my ~/.ssh/config file so that I can start ssh sessions from Gnome Do!  For more information on this <a href="http://do.davebsd.com/wiki/index.php?title=SSH_Plugin" target="_blank">check out this pos</a>t on the Gnome Do site.</p>