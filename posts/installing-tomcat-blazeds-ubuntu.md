{{{"title":"Installing Tomcat + BlazeDs on Ubuntu","tags":["Ubuntu"],"date":"8-30-2009","description":"<p>1. Install tomcat6 via synaptic.</p>\n<pre>sudo apt-get tomcat6 tomcat6-admin<br /></pre><p>There may be some tweaks that you need to do after install.&#160; I didn't need to change anything, but you can find help from the <a href=\"https://help.ubuntu.com/community/ApacheTomcat5\" target=\"_blank\">ubuntu help page for tomcat</a>.</p>"}}}

<p>1. Install tomcat6 via synaptic.</p>
<pre>sudo apt-get tomcat6 tomcat6-admin<br /></pre><p>There may be some tweaks that you need to do after install.&#160; I didn't need to change anything, but you can find help from the <a href="https://help.ubuntu.com/community/ApacheTomcat5" target="_blank">ubuntu help page for tomcat</a>.</p>
<p>2. Download the <a href="http://opensource.adobe.com/wiki/display/blazeds/Release+Builds" target="_blank">turnkey version of BlazeDS</a> from Adobe.&#160; The turnkey version comes with a preintegrated version of tomcat which we won't need.&#160; All that we need are blazeds.war, samples.war, and ds-console.war.&#160; Unzip the file.&#160; You'll find the files you need in the root of the directory.</p>
<p>3. Copy the files above to /var/lib/tomcat6/webapps/</p>
<pre>cp *.war /var/lib/tomcat6/webapps<br /></pre><p>4. Restart tomcat.&#160; This will install BlazeDS.</p>
<pre>sudo /etc/init.d/tomcat6 restart<br /></pre><p>5. Try hitting <a href="http://localhost:8080/ds-samples/" target="_blank">http://localhost:8080/ds-samples/</a></p>
<p>You're done.</p>