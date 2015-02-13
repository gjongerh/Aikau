var alfConfig = require("./_config");

module.exports = function(grunt) {
   grunt.config.merge({
      shell: {

         // Default options
         options: {
            stdout: true,
            stderr: true,
            failOnError: true
         },

         // Aikau test server
         startTestApp: {
            command: "mvn jetty:run",
            options: {
               stderr: false,
               async: true
            }
         },
         stopTestApp: {
            command: "mvn jetty:stop"
         },

         // Vagrant
         vagrantUp: {
            command: "vagrant up",
            options: {
               execOptions: {
                  cwd: alfConfig.dir.vagrant,
                  maxBuffer: "Infinite"
               }
            }
         },
         vagrantHalt: {
            command: "vagrant halt",
            options: {
               execOptions: {
                  cwd: alfConfig.dir.vagrant,
                  maxBuffer: "Infinite"
               }
            }
         },
         vagrantDestroy: {
            command: "vagrant destroy -f",
            options: {
               execOptions: {
                  cwd: alfConfig.dir.vagrant,
                  maxBuffer: "Infinite"
               }
            }
         },
         vagrantInstallGuestPlugins: {
            command: "vagrant plugin install vagrant-vbguest",
            options: {
               execOptions: {
                  cwd: alfConfig.dir.root,
                  maxBuffer: "Infinite"
               }
            }
         },
         vagrantMountSharedFoldersFix: {
            command: "vagrant up; vagrant ssh -c 'sudo ln -s /opt/VBoxGuestAdditions-4.3.10/lib/VBoxGuestAdditions /usr/lib/VBoxGuestAdditions'; vagrant reload --provision",
            options: {
               execOptions: {
                  cwd: alfConfig.dir.vagrant,
                  maxBuffer: "Infinite"
               }
            }
         }
      }

   });
};