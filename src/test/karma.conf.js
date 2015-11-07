'use strict';
// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-07-29 using
// generator-karma 0.8.3

module.exports = function (config) {

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // increase timeout
        browserNoActivityTimeout: 100000,

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['browserify', 'mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            'test/modules/**/*.js',
            'main/modules/**/*.html'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/**/*.js': ['browserify'],
            'main/modules/**/*.html': ['ng-html2js']
        },

        reporters: ['mocha', 'html', 'coverage', 'junit'],

        coverageReporter: {
            reporters: [
                {type: 'cobertura', dir: 'test/reports/coverage/cobertura'},
                {type: 'html', dir: 'test/reports/coverage/html'}
            ]
        },

        browserify: {
            debug: true,
            transform: [ 'istanbulify']
        },

        // web server port
        port: Math.floor(Math.random() * (9999 - 9000 + 1)) + 9000,

        htmlReporter: {
            outputFile: 'test/reports/quality/html/results.html'
        },

        junitReporter: {
            outputFile: 'test/reports/quality/surefire/results.xml',
            suite: ''
        },

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
            //'Chrome'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            //'karma-chrome-launcher',
            'karma-browserify',
            'karma-mocha',
            'karma-chai',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor',
            'karma-coverage',
            'karma-mocha-reporter',
            'karma-htmlfile-reporter'
        ],

        ngHtml2JsPreprocessor: {
            // define a custom transform function
            cacheIdFromPath: function (filepath) {
                var templateUrl = filepath.replace(/main\/modules\/.+\//, 'views/');
                //console.log('ngHtml2JsPreprocessor: filepath=' + filepath + ' templateUrl=' + templateUrl);
                return templateUrl;
            },

            moduleName: 'spa.templates'
        },

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
