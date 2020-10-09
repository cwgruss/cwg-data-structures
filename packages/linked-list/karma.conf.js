const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const globals = require('rollup-plugin-node-globals');

process.env.CHROME_BIN = require('puppeteer').executablePath();
process.env.FIREFOX_BIN = require('puppeteer-firefox').executablePath();

// Karma configuration
// Generated on Thu Oct 08 2020 08:16:45 GMT-0500 (Central Daylight Time)

module.exports = function (config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: ['__tests__/browser/**/*.test.js'],

		// list of files / patterns to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'__tests__/**/*.js': ['rollup'],
		},

		rollupPreprocessor: {
			plugins: [globals(), nodeResolve(), commonjs()],
			output: {
				format: 'iife',
				name: 'linkedList',
				sourcemap: 'inline',
			},
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec', 'progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome', 'Firefox'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		client: {
			captureConsole: true,
		},
	});
};
