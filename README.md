<h2>caNanoLab Project</h2>

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
<h4>Step 0: Install Node and Build the Front End</h4>
<b>Q:</b> Why not just do this in the VM Build?
<b>A:</b> Because the various symlinks put down by Node do not play well with Vagrant VMs.
<ul>
<li>Download and install Node 16 for your machine. Do not use a newer version.</li>
<li>Open a Command Line prompt and cd to <code>cananolab/software/canaolab-client-new</code></li>
<li><code>npm i</code></li>
<li><code>npm install -g @angular/cli@latest</code></li>
<li><code>ng build --base-href / --output-path ./build/</code></li>
</ul>
<br />
<li>If you don't have the Vagrant plugin installed for IdeaJ, install it from <code>File > Settings > Plugins</code>. Start typing Vagrant into the search box and the plugin should appear.<ul>
    <li>This should be done <i>after</i> installing Vagrant and VirtualBox.</li>
    <li>Double-check that your PATH has the Vagrant and VirutalBox executables on it.</li>
</ul>
<li>Download the additional JARs from the dev-tier deployment bucket <code>/jars</code> folder or the caNano Google Drive <code>Build Libraries</code> folder and place them into <code>cananolab/localDev/jars</code></li>
<li>Launch IdeaJ</li>
<li><code>Tools > Vagrant > Up</code></li>
<ul>
    <li>Your first build will need to download the VirtualBox image. This might take a few extra minutes to complete depending on your connection speed.</li>
    <li>Subsequent builds will use this same image and should be faster.</li>
    <li>Vagrant will run several build scripts to load MySQL and set up the database, download and install Wildfly 23, copy the Angular front end into the correct spot, and build the initial WAR.</li>
</ul>
<li>Once the build finishes, in IdeaJ go to <code>Tools > Start SSH Session > Vagrant at [path to your Vagrant build]</code></li>
<ul>
<li>This will eventually open a terminal in the lower half of the IdeaJ window.</li>
<li>It can be slow; alternatively you can use your own SSH client if you prefer.</li>
</ul>
<li>From the command line: <ul>
<li><code>cd shell/</code></li>
<li><code>chmod u+x ./start-wildfly-vm.sh</code></li>
<li><code>./start-wildfly-vm.sh &</code></li>
</ul>
</li>
</ol>

<h3>Local Deployment directly on a Linux/OSX platform</h3>

