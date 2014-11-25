{{{"title":"Image Security Made Simple With jQuery","tags":["jQuery"],"date":"5-22-2010","description":"<pre>\n$(document).ready(function(){\n    $(\"img\").bind(\"contextmenu\",function(){ return false; });\n});\n</pre><p>\nThis simple piece of code prevents the right click menu from opening on images.</p>"}}}

<pre>
$(document).ready(function(){
    $("img").bind("contextmenu",function(){ return false; });
});
</pre><p>
This simple piece of code prevents the right click menu from opening on images.</p>