var babel = require('broccoli-babel-transpiler'),
	pickFiles = require('broccoli-funnel'),
	mergeTrees = require('broccoli-merge-trees');

var app = pickFiles('app', {
	srcDir  : '/',
	files   : ['index.html'],
	destDir : '/app'
});

var systemjs = pickFiles('bower_components', {
	srcDir: '/system.js/dist',
	files: [
		'system.js',
		'system.js.map'
	],
	destDir: '/lib'
});

var pixi = pickFiles('bower_components', {
	srcDir: '/pixi.js/bin',
	files: [
		'pixi.min.js',
		'pixi.min.js.map'
	],
	destDir: '/lib'
});

var lib = mergeTrees([
	pixi,
	systemjs
]);

var src = pickFiles('src', {
	srcDir: '/',
	destDir: 'src'
});

src = babel(src, {
	sourceMaps: 'inline'
});

module.exports = mergeTrees([app, src, lib]);
