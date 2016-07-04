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
* load-grunt-tasks
* time-grunt

Scaffolds \_js, \_sass, \_stubs dirs and .gitignore, .jscsrc, .jshintrc, Gruntfile.js files.

The package.json will be set up with the default windows username, and if it's not available, it will fallback to my name. 

The default license in the package.json is "closed" and "private" is set to true to prevent accidental publishing to NPM.


# Development guide

## Testing the generator before publishing

From the root of the generator project (in the generator-mdworld-toolchain/ folder), type: ```npm link```

That will install your project dependencies and symlink a global module to your local file. After npm is done, 
you'll be able to call ```yo mdworld-toolchain``` 

Source: http://yeoman.io/authoring/

Undo by uninstalling: ```npm remove -g generator-mdworld-toolchain``` Or manually removing. The location of local 
packages can be retrieved with: ```npm config list``` (look for "prefix")

## Check version

It is possible to check the installed version of a npm package with (but this doesn't seem to work for linked packages):

```npm ls -g mdworld-toolchain```

## Releasing

Grunt release can be used to update the package.json number, create a git tag, create a CHANGELOG and publish to npm. 

dry run:

```grunt release --no-write```

finalize:

```grunt release```
 