// Run this file standalone with: node_modules\.bin\karma start karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            /* vendor */
            //'_test/vendor/jquery.min.js',
            //'_test/vendor/knockout-3.2.0.js',
            /* helpers */
            //'_test/helpers/*.js',
            /* sources */
            //'_js/util/*.js',
            //'_js/viewmodels/*.js',
            '_js/app.js',
            /* spec */
            //'_test/util/*Spec.js',
            //'_test/viewmodels/*Spec.js',
            '_test/appSpec.js'
        ],
        browsers: ['PhantomJS'],//['PhantomJS', 'Chrome']
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: { '_js/**/*.js': ['coverage'] },
        coverageReporter: {
            reporters: [
                { type: 'html', dir: '_analysis/coverage/' },
                { type: 'text-summary' }
            ]
        }
    });
};