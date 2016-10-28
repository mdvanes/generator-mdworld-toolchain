![Build Status](https://travis-ci.org/mdvanes/generator-mdworld-toolchain.svg?branch=master) [![npm version](https://badge.fury.io/js/generator-mdworld-toolchain.svg)](https://badge.fury.io/js/generator-mdworld-toolchain)

# Installation

The generator requires Yeoman:

```
npm i -g yo
```

Install or update this Yeoman generator with:

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
* grunt-sass-lint
* grunt-sass
* grunt-karma
* load-grunt-tasks
* time-grunt

Scaffolds \_js, \_sass, \_stubs, _test dirs and .gitignore, .jscsrc, .jshintrc, Gruntfile.js, karma.conf.js files.

The package.json will be set up with the default windows username, and if it's not available, it will fallback to my name. 

The default license in the package.json is "closed" and "private" is set to true to prevent accidental publishing to NPM.
