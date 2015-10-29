#!/usr/bin/env node

module.exports = function(grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    var src = {
        scripts: [
            '_js/app.js'
        ]
    };

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // read package.json to expose it variables under pkg

        watch: {
            script: {
                files: ['js/*.js'],
                tasks: ['build']
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'css/styles.css': '_sass/styles.scss'
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/styles.css': '_sass/styles.scss'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', '_js/**/*.js']
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },
            dev: {
                files: {
                    src: ['Gruntfile.js', '_js/**/*.js']
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */'
            },
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    // for debugging
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    'js/<%= pkg.name.toLowerCase() %>.js': src.scripts
                }
            },
            dist: {
                files: {
                    'js/<%= pkg.name.toLowerCase() %>.min.js': src.scripts
                }
            }
        }





    });

    // Tasks
    //grunt.registerTask('default-watch', ['http-server', 'karma:dev:start', 'watch']); /* for running when validators fail */
    //grunt.registerTask('default', ['jscs', 'jshint', 'karma:dist', 'uglify:dev', 'compass:dev', 'default-watch']);
    grunt.registerTask('default-watch', ['http-server', 'watch']); /* for running when validators fail */
    grunt.registerTask('default', ['jscs', 'jshint', 'uglify:dev', 'sass:dev', 'default-watch']);
};