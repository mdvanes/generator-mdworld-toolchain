#!/usr/bin/env node

module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        release: {
            options: {
                changelog: true,
                push: false, // push to git manually
                pushTags: false
            }
        },

        'notify_hooks': {
            options: {
                enabled: true,
                'max_jshint_notifications': 5, // maximum number of notifications from jshint output
                title: '<%= pkg.name.toLowerCase() %>', // defaults to the name in package.json, or will use project directory's name
                success: false, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        }
    });

};