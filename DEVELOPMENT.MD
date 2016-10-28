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

dry run:

```grunt release --no-write```

finalize:

```grunt release```
 