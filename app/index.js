/**
 * Created by m.van.es on 12-10-2015.
 */

/*
    Sets up the basic toolchain.
    Creates a package.json and Gruntfile with configurations.

    Tested with Yeoman 1.4.8

    * run locally for debugging:
        * set up: ```npm link``` now a the local project is accessible globally
        * in any dir run ```yo mdworld-toolchain```
 */

var generators = require('yeoman-generator'),
    yosay = require('yosay'),
    path = require('path'),
    pkg = require('../package.json');

// an example: https://github.com/yeoman/generator-gruntplugin/blob/master/app/index.js

module.exports = generators.Base.extend({
    intro: function() {
        console.log(yosay('Welcome to the MDWorld.nl web toolchain generator v' + pkg.version + '!'));
    },
    askFor: function() {
        var cb = this.async();
        var prompts = [
            {
                name: 'name',
                message: 'project name'
            }
        ];

        var self = this;

        this.prompt(prompts, function(props) {
            self.props = props;
            cb();
        });
    },
    writePackageJson: function() {
        var userName = process.env['USERPROFILE'].split(path.sep).pop();
        if(!userName || userName.length === '0' || userName === 'm.van.es') {
            userName = 'M.D. van Es';
        }
        var pkgFile = {
            name: this.props.name,
            version: '0.0.0',
            author: userName,
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
        this.npmInstall(['grunt-browser-sync'], { 'saveDev': true });
        this.npmInstall(['grunt-contrib-imagemin'], { 'saveDev': true });
        this.npmInstall(['grunt-contrib-jshint'], { 'saveDev': true });
        this.npmInstall(['grunt-contrib-uglify'], { 'saveDev': true });
        this.npmInstall(['grunt-contrib-watch'], { 'saveDev': true });
        this.npmInstall(['grunt-jscs'], { 'saveDev': true });
        this.npmInstall(['grunt-newer'], { 'saveDev': true });
        this.npmInstall(['grunt-notify'], { 'saveDev': true });
        this.npmInstall(['grunt-sass'], { 'saveDev': true });
        this.npmInstall(['grunt-sass-lint'], { 'saveDev': true });
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
            this.templatePath('_img/logo.png'),
            this.destinationPath('_img/logo.png')
        );
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
            this.templatePath('_.gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('_.jscsrc'),
            this.destinationPath('.jscsrc')
        );
        this.fs.copy(
            this.templatePath('_.jshintrc'),
            this.destinationPath('.jshintrc')
        );
        this.fs.copy(
            this.templatePath('_sass-lint.yml'),
            this.destinationPath('sass-lint.yml')
        );
        this.fs.copy(
            this.templatePath('_Gruntfile.js'),
            this.destinationPath('Gruntfile.js')
        );
    },
    outtro: function() {
        console.log('run ```grunt``` and visit the server at http://localhost:8282/_stubs/');
    }
});
