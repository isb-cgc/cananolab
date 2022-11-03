caNanoLab Project
=====================================
Refer to the <a href="https://wiki.nci.nih.gov/x/F4V-AQ" target="_blank" nofollow noreferrer>caNanoLab Wiki Home Page</a> for complete and current caNanoLab user documentation and other technical information.

<h3>Software Requirements</h3>
<ul>
<li>JDK8 - available at <a href="https://jdk.java.net/java-se-ri/8-MR4" target="_blank" nofollow noreferrer>OpenJDK</a></li>
<li>JetBrains IdeaJ</li>
<li>For Vagrant VM development:
<ul>
<li>Hashicorp Vagrant</li>
<li>Oracle VirtualBox</li>
</ul>
</li>
</ul>

<h3>Local Deployment using a Vagrant VM</h3>
<ol>
<li>Download the additional JARs from the dev-tier deployment bucket <code>/jars</code> folder or the caNano Google Drive <code>Build Libraries</code> folder and place them into <code>cananolab/localDev/jars</code></li>
<li>Launch IdeaJ</li>
<li><code>Tools > Vagrant > Up</code></li>
<ul>
    <li>Your first build will need to download the VirtualBox image. This might take 10-20 minutes to complete depending on your connection speed.</li>
    <li>Subsequent builds will use this same image and should be faster.</li>
    <li>Vagrant will run several build scripts to load MySQL 5.7 and set up the database, download and install Wildfly 23, and build the Angular front end.</li>
</ul>
<li>Once the build finishes, in IdeaJ go to <code>Tools > Start SSH Session > Vagrant at [path to your Vagrant build]</code></li>
<ul>
<li>This will eventually open a terminal in the lower half of the IdeaJ window.</li>
<li>It can be slow; alternatively you can use your own SSH client if you prefer.</li>
</ul>
<li>From the command line, cd /opt/</li>
</ol>

<h3>Local Deployment directly on a Linux/OSX platform</h3>

