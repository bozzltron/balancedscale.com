{{{"title":"Installing Flex Builder on Ubuntu 8.10 Intrepid Ibex","tags":["Linux"],"date":"12-26-2008","description":"<p>Unfortunately, this was not straight forward task for me, which may be due to my lack of skills.  So, in order to ease someone else's pain, I'm posting my method of installing flex builder on Ubuntu 8.10.  </p>\n<ol>\n<li><a href=\"http://archive.eclipse.org/eclipse/downloads/drops/R-3.3-200706251500/index.php\"><strong>Download Eclipse 3.3 Europa</strong></a><br />\nThe download link for Europa 3.3 is post worthy in and of itself due to Eclipse Project's troublesome site navigation.  I downloaded the Linux (x86/GTK 2) version on to my 32-bit machine (64 bit also available).\n</li>\n</ol>"}}}

<p>Unfortunately, this was not straight forward task for me, which may be due to my lack of skills.  So, in order to ease someone else's pain, I'm posting my method of installing flex builder on Ubuntu 8.10.  </p>
<ol>
<li><a href="http://archive.eclipse.org/eclipse/downloads/drops/R-3.3-200706251500/index.php"><strong>Download Eclipse 3.3 Europa</strong></a><br />
The download link for Europa 3.3 is post worthy in and of itself due to Eclipse Project's troublesome site navigation.  I downloaded the Linux (x86/GTK 2) version on to my 32-bit machine (64 bit also available).
</li>
<li><strong>Extract Eclipse 3.3 Europa</strong><br />
Europa is not the latest version of Eclipse, which I also use, so after extracting Europa to my /home/<username> folder I renamed it to "europa".
</username></li>
<li><a href="http://labs.adobe.com/technologies/flex/flexbuilder_linux/"><strong>Download Flex Builder Linux Alpha</strong></a> from Adobe Labs</li>
<li><strong>Run The Flex Builder Install Script</strong><br />
Follow the instructions from the Adobe Labs on running the install script.  Note that before running these commands you need to open up a terminal and navigate to the folder where your ".bin" file is located.
<blockquote><p>
Run the installer either marking it as executable (chmod +x) or by using a shell to execute it (sh flexbuilder_linux_install_a4_081408.bin).</p>
<p>When prompted, specify whether to install Flash Player 9 (note that this is an updated version of Flash Player 9 and that Flex Builder Linux will work with earlier versions of Flash Player 9 for Linux). This is the debug version of Flash Player 9, which is required for debugging support and exception display.
</p></blockquote>
<p>The install script will ask you where eclipse is located which is when you want to point it to your eclipse folder, in my case named "europa".</p>
</li><li><strong>Run Eclipse</strong><br />
Now when you run Eclipse, it will ask you what workspace you want to use.  Make sure that you create and new Flex workspace and are not using a workspace used by another Eclipse install.
</li>
<li><strong>Start A Flex Project</strong><br />
Once Eclipse has opened you should be able to create a Flex project by clicking "File->New->Other...".  In the window click the Flex Builder folder icon which has several options including "Flex Project", which is generally what you will use for a Flex application.
</li>
</ol>