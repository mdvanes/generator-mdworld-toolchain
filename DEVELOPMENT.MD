# Development guide

Instructions for the development of this generator. This is not needed to use the generator.


## Testing the generator before publishing

From the root of the generator project (in the generator-mdworld-toolchain/ folder), type: ```npm link```

That will install your project dependencies and symlink a global module to your local file. After npm is done, 
you'll be able to call ```yo mdworld-toolchain``` 

Source: http://yeoman.io/authoring/

Undo by uninstalling: ```npm remove -g generator-mdworld-toolchain``` Or manually removing. The location of local 
packages can be retrieved with: ```npm config list -l``` (look for "prefix")


## Check version

It is possible to check the installed version of a npm package with (but this doesn't seem to work for linked packages):

```npm ls -g mdworld-toolchain```


## Releasing

Grunt release can be used to update the package.json number, create a git tag, create a CHANGELOG and publish to npm. 

First, manually add a summary of the changes for this release to the top of CHANGELOG.MD. Might be automized with https://github.com/ericmatthys/grunt-changelog

Dry run:

```grunt release --no-write```

Finalize:

```grunt release```
 
It's also possible to set a specific version number, see https://github.com/geddski/grunt-release
Instead of pushing with grunt release to NPM, it might be better to do this from Travis, after running the unit tests and only if the version was updated.