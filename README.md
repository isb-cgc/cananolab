<h2>caNanoLab Project</h2>

Refer to the <a href="https://wiki.nci.nih.gov/x/F4V-AQ" target="_blank" nofollow noreferrer>caNanoLab Wiki Home Page</a> for complete and current caNanoLab user documentation and other technical information.

<h3>Software Requirements</h3>
<ul>
    <li>JDK8 - available at <a href="https://jdk.java.net/java-se-ri/8-MR4" target="_blank" nofollow noreferrer>OpenJDK</a></li>
    <li>An IDE (there is a Vagrant plugin for JetBrains IdeaJ)</li>
    <li>For Vagrant VM development:
        <ul>
            <li>Hashicorp Vagrant</li>
            <li>Oracle VirtualBox</li>
        </ul>
    </li>
</ul>

Before proceeding, make a new project in your IDE and clone the caNanoLab repository from GitHub 
(github.com/isb-cgc/cananolab). 

<h3>Local Deployment using a Vagrant VM</h3>
<h4>Step 0: Install Node and Build the Front End</h4>
<ul>
    <li>Download and install Node 16 for your machine. Do not use a newer version, and do not install it from the VM.</li>
    <li>Open a Command Line prompt and change directories to <code>cananolab/software/canaolab-client-new</code></li>
    <li><code>npm i</code></li>
    <li><code>npm install -g @angular/cli@latest</code></li>
    <li><code>ng build --base-href / --output-path ./build/</code></li>
</ul>

<h4>Step 1: Load provided JAR dependencies</h4>
<ul>Download the additional JARs from the dev-tier deployment bucket <code>/jars</code> folder or the caNano Google 
    Drive <code>Build Libraries</code> folder and place them into <code>cananolab/localDev/jars</code></ul>

<h4>Step 2: Load provided JAR dependencies</h4>
<ul>Create a directory above the git repository root (<code>cananolab</code>) named <code>secure_files</code>. Note that
if you are using IdeaJ this directory will be in your <code>IdeajProjects</code> directory.</ul>
    
<h4>Step 3a: <b><i>With</i></b> IdeaJ integration</h4>
<ul>
    <li>Launch IdeaJ</li>
    <li>Install the Vagrant plugin for IdeaJ from <code>File > Settings > Plugins</code>.
        <ul>
            <li>Start typing <code>Vagrant</code> into the search box and the plugin should appear.</li>
            <li>The plugin can only be installed <i>after</i> installing Vagrant and VirtualBox on your machine.</li>
            <li>Double-check that your PATH/path has the Vagrant and VirutalBox executables on it.</li>
        </ul>
    </li>
    <li><code>Tools > Vagrant > Up</code>
        <ul>
            <li>Your first build will need to download the VirtualBox image. This might take a few extra minutes to complete depending on your connection speed.</li>
            <li>Subsequent builds will use this same image and should be faster.</li>
            <li>Vagrant will run several build scripts to load MySQL and set up the database, download and install Wildfly 23, copy the Angular front end into the correct spot, and build the initial WAR.</li>
        </ul>
    </li>
    <li>Once the build finishes, in IdeaJ go to <code>Tools > Start SSH Session > Vagrant at [path to your Vagrant build]</code></li>
    <ul>
    <li>This will eventually open a terminal in the lower half of the IdeaJ window.</li>
    <li>It can be slow; alternatively you can use your own SSH client if you prefer.</li>
    </ul>
</ul>

<h4>Step 3b: <b><i>Without</i></b> IdeaJ integration</h4>
<ul>
    <li>In your machine's CLI, change directories to <code>cananolab/software/cananolab-wepapp/</code></li>
    <li><code>vagrant up</code></li>
    <li>The build should complete with an exit code of 0. At this point you can SSH into the VM from any SSH client using a login and password of vagrant/vagrant on port 2222.</li>
</ul>

<h4>Step 4: Starting Wildfly on your VM</h4>
From the VM command line: 
<ul>
    <li><code>cd /home/vagrant/cananolab/shell/</code></li>
    <li><code>sudo -E ./build-and-redeploy.sh &</code></li>
</ul>
Leaving off the -d switch will result in the system only starting Wildfly and deploying.

<h4>Rebuilding and Redeploying</h4>
From the VM command line:
<ul>
    <li><code>cd /home/vagrant/cananolab/software/cananolab-webapp/</code></li>
    <li><code>sudo -E ../../shell/build-and-redeploy.sh -d &</code></li>
</ul>

The -d switch will cause the script to rebuild the WAR before starting wildfly and (re)deploying.

Wildfly will output its logs directly to the console.


<h3>Local Deployment directly on a Linux/OSX platform</h3>

