# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure(2) do |config|
  config.vm.provider "virtualbox" do |vb|
     # Display the VirtualBox GUI when booting the machine
     # vb.gui = true

     # Customize the amount of memory on the VM:
     vb.memory = "2048"

     vb.customize ["modifyvm", :id, "--uart1", "0x3F8", "4"]
     vb.customize ["modifyvm", :id, "--uartmode1", "file", File::NULL]

     vb.customize ["modifyvm", :id, "--nestedpaging", "off"]
     vb.customize ["modifyvm", :id, "--cpus", 2]
     vb.customize ["modifyvm", :id, "--paravirtprovider", "hyperv"]
   end

  config.vm.box_url = "https://app.vagrantup.com/debian/boxes/buster64"
  config.vm.box = "debian/buster64"

  # WebApp ports
  config.vm.network "forwarded_port", guest: 8086, host: 8086
  config.vm.network "forwarded_port", guest: 8006, host: 8006

  config.vm.synced_folder ".", "/home/vagrant/cananolab"
  config.vm.synced_folder "../", "/home/vagrant/parentDir"
  config.vm.synced_folder "../secure_files", "/home/vagrant/secure_files"

  config.vm.provision :shell, inline: "echo 'source /home/vagrant/cananolab/shell/env.sh' > /etc/profile.d/sa-environment.sh", :run => 'always'
  config.vm.provision "shell", path: 'shell/install-deps.sh'
  config.vm.provision "shell", path: 'shell/create-database.sh'
  config.vm.provision "shell", path: 'shell/database-setup.sh'
  config.vm.provision "shell", path: 'shell/run-build.sh'
  config.vm.provision "shell", path: 'shell/wildfly-setup.sh'
end