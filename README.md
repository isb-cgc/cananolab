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
<li>Download the additional JARs from the dev-tier deployment bucket <code>/jars</code> directory and place them into <code>cananolab/software/cananolab-webapp/libs</code></li>
<li>Launch IdeaJ</li>
<li><code>Tools > Vagrant > Up</code></li>
<ul>
    <li>Your first build will need to download the VirtualBox image. This might take 10-20 minutes to complete depending on your connection speed.</li>
    <li>Subsequent builds will use this same image and should be faster.</li>
    <li>Vagrant will run several build scripts to load MySQL 8 and set up the database, download and install Wildfly 23, and build the Angular front end.</li>
</ul>
<li>In IdeaJ, click on <code>Add Configuration...</code> from the toolbar, towards the upper-right.</li>
<li>Click the <code>+</code> in the upper-left corner of the dialog.</li>
<li>From the <code>Add New Configuration</code> list, choose <code>JBOSS/Wildfly > Remote</code></li>
<li>Fille in the following information:</li>
<ul>
<li>Name: <code>caNanoLab Local Development</code></li>
<li>Application Server
<ol>
<li>Click on the <code>Configure...</code> button.</li>
<li>In the <code>JBOSS/Wildfly Home:</code> box, click on the folder icon and brows to </li>
</ol></li>
</ul>
</ol>

<h3>Local Deployment directly on a Linux/OSX platform</h3>

