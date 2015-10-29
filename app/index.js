/**
 * Created by m.van.es on 12-10-2015.
 */

/*
    TODO

    Sets up the basic toolchain.
    Creates a package.json and Gruntfile with configurations.
    Creates file dirs (_js, _sass, etc).
    Adds _dist (etc?) to .gitignore

    Tested with Yeoman 1.4.8

    * rename to something like: "mdworld-toolchain-generator"
    * run locally for debugging:
        * set up: ```npm link``` now a the local project is accessible globally
        * in any dir run ```yo mdworld-toolchain```
 */

var generators = require('yeoman-generator'),
    yosay = require('yosay');


// an example: https://github.com/yeoman/generator-gruntplugin/blob/master/app/index.js


// TODO write .jscs
// TODO write .jshintrc
// TODO add libsass
// TODO add uglify
// TODO add watch
// TODO add http-server
// TODO add notify_hooks (grunt-notify)
// TODO add kot2html/clean/copy/compress
// TODO add karma?
// TODO add plato, complexity




module.exports = generators.Base.extend({
    intro: function () {
        //console.log('method 1 just ran');
        console.log(yosay('Welcome to my personal web toolchain generator!'));
    },
    method2: function () {
        console.log('method 2 just ran');
    },
    askFor: function () {
        var cb = this.async();
        var prompts = [
            {
                name: 'name',
                message: 'project name'/*,
                default: 'baz'*/
            }
        ];

        var self = this;

        this.prompt(prompts, function(props) {
            console.log('props', props);
            self.props = props;
            cb();
        });
    },
    writePackageJson: function() {
        var pkgFile = {
            name: this.props.name,
            version: '0.0.0',
            author: 'M.D. van Es',
            private: true,
            license: 'closed'
        };

        //this.write('package.json', JSON.stringify(pkgFile));
        this.write('package.json', JSON.stringify(pkgFile, null, 4));
    },
    //installDevDependencies: function() {
    //    this.npmInstall(['grunt'], { 'saveDev': true });
    //    this.npmInstall(['grunt-contrib-jshint'], { 'saveDev': true });
    //    this.npmInstall(['grunt-contrib-watch'], { 'saveDev': true });
    //    this.npmInstall(['grunt-jscs'], { 'saveDev': true });
    //    this.npmInstall(['grunt-notify'], { 'saveDev': true });
    //    this.npmInstall(['grunt-sass'], { 'saveDev': true });
    //    this.npmInstall(['load-grunt-tasks'], { 'saveDev': true });
    //    this.npmInstall(['time-grunt'], { 'saveDev': true });
    //},
    //writeGruntfile: function() {
    //    // TODO use custom sorting (pkg first etc) instead of auto sorting
    //    this.gruntfile.insertConfig('pkg', 'grunt.file.readJSON(\'package.json\')');
    //
    //    var notifyHooksConfig = {
    //        options: {
    //            enabled: true,
    //            'max_jshint_notifications': 6, // maximum number of notifications from jshint output
    //            title: '<%= pkg.name.toLowerCase() %>', // defaults to the name in package.json, or will use project directory's name
    //            success: false, // whether successful grunt executions should be notified automatically
    //            duration: 3 // the duration of notification in seconds, for `notify-send only
    //        }
    //    };
    //
    //    //this.gruntfile.insertConfig('\'notify_hooks\'', JSON.stringify(notifyHooksConfig, null, 4));
    //    this.gruntfile.insertConfig('\'notify_hooks\'', JSON.stringify(notifyHooksConfig));
    //},
    copyTemplates: function() {
        this.fs.copyTpl(
            this.templatePath('Gruntfile.js'),
            this.destinationPath('Gruntfile.js'),
            {  }
        );
    }
});

//var MyWebappGenerator = module.exports = function MyWebAppGenerator(args, options) {
//    generators.generators.Base.apply(this, arguments);
//};




//MyWebappGenerator.prototype.intro = function() {
//    console.log(yosay('Welcome to my personal web toolchain generator!'));
//};