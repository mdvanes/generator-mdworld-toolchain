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
            sass: {
                files: ['_sass/**/*.scss'],
                tasks: ['sass:dev']
            },
            script: {
                files: ['_js/**/*.js'],
                tasks: ['jscs', 'jshint', 'uglify:dev']
            },
            images: {
                files: ['_img/*.*'],
                tasks: ['newer:imagemin:dev']
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
        },

        imagemin: {
            dev: {
                files: [{
                    expand: true,
                    cwd: '_img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'js/*.js',
                        'css/*.css',
                        'img/*.*',
                        '_stubs/*.html'
                    ]
                },
                options: {
                    server: './',
                    watchTask: true, // watch runs after browserSync
                    port: 8282, // default port is 3000, browserSync admin is on http://localhost:3001/
                    open: false // don't open the browser automatically
                }
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

    // Tasks
    //grunt.registerTask('default-watch', ['http-server', 'karma:dev:start', 'watch']); /* for running when validators fail */
    //grunt.registerTask('default', ['jscs', 'jshint', 'karma:dist', 'uglify:dev', 'compass:dev', 'default-watch']);
    grunt.registerTask('default-watch', ['browserSync', 'watch']); /* for running when validators fail */
    grunt.registerTask('default', ['jscs', 'jshint', 'uglify:dev', 'sass:dev', 'newer:imagemin:dev', 'default-watch']);
};