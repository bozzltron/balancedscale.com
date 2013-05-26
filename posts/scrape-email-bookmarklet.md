{{{"title":"Scrape Email Bookmarklet","tags":["JavaScript"],"date":"10-27-2010"}}}

<p>Here is a simple bookmarklet to collect the email addresses on a web page.  Enjoy!</p>
<p><strong>Code</strong></p>
<pre>javascript:(function(){
var output = '';
var links = document.getElementsByTagName('a');
for(var i=0; i&#60;links.length; i++){
    if(links[i].href.indexOf('mailto') != -1){
    output += links[i].href.substring(7);
    output += ', ';
}
}
if(output.length == 0){
output = 'No Emails Found';
}
alert(output);
})()
</pre><p><a href="javascript:(function(){var output='';var links=document.getElementsByTagName('a');for(var i=0;i&#60;links.length;i++){if(links[i].href.indexOf('mailto')!=-1){output+=links[i].href.substring(7);output+=', ';}} if(output.length==0){output='No Emails Found';}alert(output);})()"><strong>Scrape Email Bookmarklet</strong></a></p>
<p>Drag and drop this link to your bookmark bar or right click it and add it as a bookmark or favorite.</p>
<p><strong>Usage:</strong></p>
<p>Go to a web page with email links and click on the bookmark.&#160; An alert should appeart with a comma seperated list of all the email addresses on teh page.</p>