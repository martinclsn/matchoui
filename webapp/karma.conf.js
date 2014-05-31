module.exports = {
  // base path, that will be used to resolve files and exclude
  basePath: '',

  // testing framework to use (jasmine/mocha/qunit/...)
  frameworks: ['jasmine'],

  // list of files / patterns to load in the browser
  files: [
    'test/lib/angular.js',
    'test/lib/*.js',
    'app/bower_components/angular-ui-router/release/angular-ui-router.js',
    'app/bower_components/ionic/release/js/ionic.js',
    'app/bower_components/ionic/release/js/ionic-angular.js',
    'app/scripts/*.js',
    'app/scripts/**/*.js',
    'test/**/*.js'
//    'app/scripts/testApp/**/*.js',
//    'test/testApp/**/*.js'
  ],

  // list of files / patterns to exclude
  exclude: [],

  colors: true,

  // possible values: 'OFF', 'ERROR', 'WARN', 'INFO', 'DEBUG'
  logLevel: 'INFO',

  captureTimeout: 60000,

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['progress'],

  // web server port
  port: 9876,

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,

  // Start these browsers, currently available:
  // - Chrome
  // - ChromeCanary
  // - Firefox
  // - Opera
  // - Safari (only Mac)
  // - PhantomJS
  // - IE (only Windows)
  browsers: ['Chrome'],

  // Continuous Integration mode
  // if true, it capture browsers, run tests and exit
  singleRun: false
};