/**
 * Created by m.van.es on 12-10-2015.
 */

/*
    TODO

    Sets up the basic toolchain.
    Creates a package.json and Gruntfile with configurations.

    Tested with Yeoman 1.4.8

    * run locally for debugging:
        * set up: ```npm link``` now a the local project is accessible globally
        * in any dir run ```yo mdworld-toolchain```
 */

var generators = require('yeoman-generator'),
    yosay = require('yosay');


// an example: https://github.com/yeoman/generator-gruntplugin/blob/master/app/index.js

// TODO add browsersync?
// TODO add dist? (kot2html/clean/copy/compress) -> also _dist in gitignore
// TODO add karma?
// TODO add plato, complexity




module.exports = generators.Base.extend({
    intro: function() {
        //console.log('method 1 just ran');
        console.log(yosay('Welcome to my personal web toolchain generator!'));
    },
    askFor: function() {
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
            description: '',
            repository: {
                type: 'git',
                url: ''
            },
            private: true,
            license: 'closed'
        };
        this.write('package.json', JSON.stringify(pkgFile, null, 4));
    },
    installDevDependencies: function() {
        this.npmInstall(['grunt'], { 'saveDev': true });
        this.npmInstall(['grunt-contrib-jshint'], { 'saveDev': true });
        this.npmInstall(['grunt-contrib-uglify'], { 'saveDev': true });
        this.npmInstall(['grunt-contrib-watch'], { 'saveDev': true });
        this.npmInstall(['grunt-http-server'], { 'saveDev': true });
        this.npmInstall(['grunt-jscs'], { 'saveDev': true });
        this.npmInstall(['grunt-notify'], { 'saveDev': true });
        this.npmInstall(['grunt-sass'], { 'saveDev': true });
        this.npmInstall(['load-grunt-tasks'], { 'saveDev': true });
        this.npmInstall(['time-grunt'], { 'saveDev': true });
    },
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
        this.fs.copy(
            this.templatePath('_js/app.js'),
            this.destinationPath('_js/app.js')
        );
        this.fs.copy(
            this.templatePath('_sass/styles.scss'),
            this.destinationPath('_sass/styles.scss')
        );
        this.fs.copyTpl(
            this.templatePath('_stubs/index.html'),
            this.destinationPath('_stubs/index.html'),
            { projectName: this.props.name }
        );
        this.fs.copy(
            this.templatePath('.gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('.jscsrc'),
            this.destinationPath('.jscsrc')
        );
        this.fs.copy(
            this.templatePath('.jshintrc'),
            this.destinationPath('.jshintrc')
        );
        this.fs.copy(
            this.templatePath('Gruntfile.js'),
            this.destinationPath('Gruntfile.js')
        );
    },
    outtro: function() {
        console.log('run ```grunt``` and visit the server at http://localhost:8282');
    }
});

//var MyWebappGenerator = module.exports = function MyWebAppGenerator(args, options) {
//    generators.generators.Base.apply(this, arguments);
//};




//MyWebappGenerator.prototype.intro = function() {
//    console.log(yosay('Welcome to my personal web toolchain generator!'));
//};