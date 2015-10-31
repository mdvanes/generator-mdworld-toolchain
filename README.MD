# Installation

Install this Yeoman generator with:

```
npm i -g generator-mdworld-toolchain
```

Then scaffold a project by running in the target dir:

```
yo mdworld-toolchain
```

After setting up run:

```
grunt
```

and visit http://localhost:8282/_stubs/

# Purpose

The goal of this generator is to set up as fast as possible, so there is very little interactive input during setup. It sets up a toolchain with:

* grunt
* grunt-browser-sync
* grunt-contrib-jshint
* grunt-contrib-uglify
* grunt-contrib-watch
* grunt-jscs
* grunt-notify
* grunt-sass
* load-grunt-tasks
* time-grunt

Scaffolds \_js, \_sass, \_stubs dirs and .gitignore, .jscsrc, .jshintrc, Gruntfile.js files.




# Development guide

## Releasing

dry run:

```grunt release --no-write``` 