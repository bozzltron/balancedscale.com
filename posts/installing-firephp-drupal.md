{{{"title":"Installing FirePHP For Drupal","tags":["Drupal"],"date":"3-7-2009","description":"I just found this and thought I'd pass it along. Firebug is an extension for the Firefox browser which provides a rich interface for JavaScript debugging among other features. FirePHP is an extension that allows use to leverage Firebug rich interface for PHP debugging. To install FirePHP for Drupal follow the instructions provided by FirePHP HQ.\n\n<ol>\n   <li>Download and enable devel-module from <a href=\"http://drupal.org/project/devel\" title=\"http://drupal.org/project/devel\">http://drupal.org/project/devel</a></li>\n   <li>Create a folder FirePHPCore in the devel-modul-folder (modules/devel)</li>\n   <li>Download the FirePHPCore library from <a href=\"http://www.firephp.org/HQ\" title=\"http://www.firephp.org/HQ\">http://www.firephp.org/HQ</a></li></ol>"}}}

I just found this and thought I'd pass it along. Firebug is an extension for the Firefox browser which provides a rich interface for JavaScript debugging among other features. FirePHP is an extension that allows use to leverage Firebug rich interface for PHP debugging. To install FirePHP for Drupal follow the instructions provided by FirePHP HQ.

<ol>
   <li>Download and enable devel-module from <a href="http://drupal.org/project/devel" title="http://drupal.org/project/devel">http://drupal.org/project/devel</a></li>
   <li>Create a folder FirePHPCore in the devel-modul-folder (modules/devel)</li>
   <li>Download the FirePHPCore library from <a href="http://www.firephp.org/HQ" title="http://www.firephp.org/HQ">http://www.firephp.org/HQ</a></li>
   <li>Unpack the <a href="http://www.firephp.org/DownloadRelease/FirePHPLibrary-FirePHPCore-0.2.1">FirePHPCore library</a> and copy the lib folder to the FirePHPCore folder in the devel-module (modules/devel/FirePHPCore/lib) </li>
</ol>

The final file structure should be:

modules/devel/FirePHPCore/lib/FirePHPCore/fb.php
modules/devel/FirePHPCore/lib/FirePHPCore/FirePHP.class.php

For logging to Firebug use dfb() instead of fb(). Both functions take the same arguments. You can find a reference here.

&#60;?php

dfb('Log message', FirePHP::LOG);

?&#62;