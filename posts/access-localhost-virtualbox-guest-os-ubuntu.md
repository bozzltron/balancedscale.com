{{{"title":"Access localhost from a VirtualBox Guest OS on Ubuntu","tags":["Ubuntu"],"date":"12-3-2009"}}}

<p>I recently installed Windows 7 via VirtualBox for some cross browser testing. &#160;While in development I needed to map localhost from the Windows 7 Guest OS to my Apache server in Ubuntu. &#160;Some quick searching around turned up the following ip address. &#160;All I had to do was update the current localhost line in my Windows 7 hosts file.</p>
<pre>10.0.2.2    localhost</pre>