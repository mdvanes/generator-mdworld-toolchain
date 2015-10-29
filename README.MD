Install this generator with ```npm i -g generator-mdworld-toolchain```, then run in any dir ```yo mdworld-toolchain```

The goal of this generator is to set up as fast as possible, so there is very little interactive input during setup. It sets up a toolchain with:

* grunt
* grunt-contrib-jshint
* grunt-contrib-uglify
* grunt-contrib-watch
* grunt-http-server
* grunt-jscs
* grunt-notify
* grunt-sass
* load-grunt-tasks
* time-grunt

Scaffolds \_js, \_sass, \_stubs dirs and .gitignore, .jscsrc, .jshintrc, Gruntfile.js files.